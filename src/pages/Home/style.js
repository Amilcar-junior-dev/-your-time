import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewButtom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 80
    },
    TouchableBotao: {
        backgroundColor: '#B8ACF1',
        width: '90%',
        height: 50,
        borderRadius: 4,
    },
    TextBottom: {
        textAlign: 'center',
        paddingTop: 15,
    },
    txtP: {
        textAlign: 'center',
        marginTop: 50,
        color: '#212121',
        fontSize: 24,
    },
    dataP: {
        textAlign: 'center',
        color: '#4A4A4A',
        fontSize: 20
    },
    temp: {
        fontSize: 118,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3F3E3E',
    },
    caracteris: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    txtViewC: {
        borderWidth: 1,
        borderRadius: 18,
        width: 100,
        height: 60,
        borderColor: '#B8ACF1'
    },
    text1: {
        textAlign: 'center',
        color: '#616161',
        fontSize: 14
    },
    text2: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#041316',
        fontSize: 20
    },
    viewSun: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    imgSun: {
        alignSelf: 'center',
        display: 'flex',
        width: 200,
        height: 200,
        marginTop: 0
    }
})
export default styles;