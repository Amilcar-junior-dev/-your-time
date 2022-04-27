import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Home/style'
import { Container } from './styleLinear';

import { AuthContext } from '../../contexts/auth';

const Home = () => {
    const navigation = useNavigation();

    const { city } = useContext(AuthContext);
    const { date } = useContext(AuthContext);
    const { tempMax } = useContext(AuthContext);
    const { tempMin } = useContext(AuthContext);
    const { wind } = useContext(AuthContext);
    const { humidity } = useContext(AuthContext);

    return (
        <Container style={{ flex: 1 }} colors={[
            '#F3F3F3', '#F0F0F0', '#FFFFFF'
        ]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.txtP}> {city} </Text>
                <Text style={styles.dataP}>{date}</Text>

                <View style={{ flex: 1 }}>
                    <Text style={styles.temp}>{tempMax}º</Text>

                    <View style={styles.viewSun}>
                        <Image
                            source={require("../../assets/sol.png")}
                            style={styles.imgSun}
                        />
                    </View>

                </View>

                <View style={styles.caracteris}>

                    <View style={styles.txtViewC}>
                        <Text style={styles.text1} >Minima </Text>
                        <Text style={styles.text2} >{tempMin}º </Text>
                    </View>

                    <View style={styles.txtViewC}>
                        <Text style={styles.text1}>vento </Text>
                        <Text style={styles.text2}>{wind}</Text>
                    </View>

                    <View style={styles.txtViewC}>
                        <Text style={styles.text1}>Humidade </Text>
                        <Text style={styles.text2}>{humidity}</Text>
                    </View>

                </View>

                <View style={styles.viewButtom} >
                    <TouchableOpacity  style={styles.TouchableBotao} >
                        <Text style={styles.TextBottom} >Ver clima completo</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Container>
    )
}
export default Home;
