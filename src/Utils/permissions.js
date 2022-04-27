import { check, PERMISSIONS } from 'react-native-permissions';
import { Platform, PermissionsAndroid } from 'react-native';
import geolocation from 'react-native-geolocation-service'

export const requestLocationPermission = async () => {
    if (Platform.OS == "android") {
        return await requestLocationPermissionAndroid()
    } else {
        return await requestLocationPermissionIOS()
    }
}

export const requestLocationPermissionAndroid = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED ? true : false
    } catch (error) {
        return false
    }
}

export const requestLocationPermissionIOS = async () => {
    const granted = await geolocation.requestAuthorization('whenInUse')
    if (granted == 'granted') {
        return true
    } else {
        return false
    }
}

export const hasLocationPermission = async () => {
    if (Platform.OS === 'android') {
        return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    } else {
        return await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE) === 'granted'
    }
}
