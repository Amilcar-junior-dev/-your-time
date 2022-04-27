import React, { createContext, useEffect, useState } from 'react';
import { hasLocationPermission, requestLocationPermission } from '../Utils/permissions';
import Geolocation from 'react-native-geolocation-service';
import api from '../Utils/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [region, setRegion] = useState(null);
    const [localUser, setLocalUser] = useState(null);
    const [city, setCity] = useState('');
    const [dateAtual, setDateAtual] = useState('');
    const [dateProx1, setDateProx1] = useState('');
    const [dateProx2, setDateProx2] = useState('');
    const [dateProx3, setDateProx3] = useState('');
    const [dateProx4, setDateProx4] = useState('');
    const [dateProx5, setDateProx5] = useState('');

    const [tempMax, setTempMax] = useState('');
    const [tempMaxProx1, setTempMaxProx1] = useState('');
    const [tempMaxProx2, setTempMaxProx2] = useState('');
    const [tempMaxProx3, setTempMaxProx3] = useState('');
    const [tempMaxProx4, setTempMaxProx4] = useState('');
    const [tempMaxProx5, setTempMaxProx5] = useState('');

    const [tempMin, setTempMin] = useState('');
    const [tempMinProx1, setTempMinProx1] = useState('');
    const [tempMinProx2, setTempMinProx2] = useState('');
    const [tempMinProx3, setTempMinProx3] = useState('');
    const [tempMinProx4, setTempMinProx4] = useState('');
    const [tempMinProx5, setTempMinProx5] = useState('');

    const [wind, setWind] = useState('');
    const [humidity, setHumidity] = useState('');
    async function getLocalUser() {

        if (localUser == '') {

            alert('location not found, please enable GPS ');

            return;
        } else {
            try {

                const response = await api.get(`weather?key=44b1ac9a&lat=${region.latitude}&lon=${region.longitude}&user_ip=remote`)

                setCity(await response.data.results.city);
                await AsyncStorage.setItem('city', response.data.results.city);

                setDateAtual(await response.data.results.date);
                setDateProx1(await response.data.results.forecast[1].date)
                console.log(dateProx1)
                setDateProx2(await response.data.results.forecast[2].date)
                setDateProx3(await response.data.results.forecast[3].date)
                setDateProx4(await response.data.results.forecast[4].date)
                setDateProx5(await response.data.results.forecast[5].date)

                setTempMax(await response.data.results.temp);
                await AsyncStorage.setItem('tempMax', JSON.stringify(response.data.results.temp))

                setTempMaxProx1(await response.data.results.forecast[1].max);
                setTempMaxProx2(await response.data.results.forecast[2].max);
                setTempMaxProx3(await response.data.results.forecast[3].max);
                setTempMaxProx4(await response.data.results.forecast[4].max);
                setTempMaxProx5(await response.data.results.forecast[5].max);

                setTempMin(await response.data.results.forecast[0].min);
                await AsyncStorage.setItem('tempMin', JSON.stringify(response.data.results.forecast[0].min))

                setTempMinProx1(await response.data.results.forecast[1].min);
                setTempMinProx2(await response.data.results.forecast[2].min);
                setTempMinProx3(await response.data.results.forecast[3].min);
                setTempMinProx4(await response.data.results.forecast[4].min);
                setTempMinProx5(await response.data.results.forecast[5].min);

                setWind(await response.data.results.wind_speedy);
                await AsyncStorage.setItem('Wind', JSON.stringify(response.data.results.wind_speedy))

                setHumidity(await response.data.results.humidity);
                await AsyncStorage.setItem('Humidity', JSON.stringify(response.data.results.humidity))

            } catch (error) {
                const resCity = await AsyncStorage.getItem('city')
                setCity(resCity)

                const resTempMin = await AsyncStorage.getItem('tempMin')
                setTempMin(resTempMin)

                const resWind = await AsyncStorage.getItem('Wind')
                setWind(resWind)

                const resHumidity = await AsyncStorage.getItem('Humidity')
                setHumidity(resHumidity)

                const resTempMax = await AsyncStorage.getItem('tempMax')
                setTempMax(resTempMax)

            }
        }

    };
    getLocalUser();

    useEffect(() => {
        (async function () {

            const permision = await hasLocationPermission()
            console.log(permision)

            if (permision) {
                Geolocation.getCurrentPosition(
                    ({ coords }) => {
                        setRegion({
                            latitude: coords.latitude,
                            longitude: coords.longitude,
                            latitudeDelta: 0.0143,
                            longitudeDelta: 0.0134
                        })
                    },
                    (error) => { console.log(error) },
                    {
                        timeout: 2000,
                        enableHighAccuracy: true,
                        maximumAge: 1000,
                    }
                )
            } else {

                (async function () {
                    return await requestLocationPermission();
                })();
            }
        })();
    }, [])

    return (
        <AuthContext.Provider value={{
            city,
            dateAtual,
            dateProx1,
            dateProx2,
            dateProx3,
            dateProx4,
            dateProx5,
            tempMax,
            tempMaxProx1,
            tempMaxProx2,
            tempMaxProx3,
            tempMaxProx4,
            tempMaxProx5,
            tempMinProx1,
            tempMinProx2,
            tempMinProx3,
            tempMinProx4,
            tempMinProx5,
            tempMin,
            wind,
            humidity
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;



