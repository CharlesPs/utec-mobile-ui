
import {
    StyleSheet,
    Platform
} from 'react-native'

import { Colors } from '../../Resources/Constants/Colors'
import { Metrics } from '../../Resources/Constants/Metrics'
import { Fonts } from '../../Resources/Constants/Fonts'

const styles = StyleSheet.create({
    modal: {
        width: '80%',
        opacity: 0.5,
    },
    alertContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    alert: {
        backgroundColor: '#fff',
        width: Metrics.wp('85%'),
        borderRadius: 5,
        paddingHorizontal: Metrics.wp('10%'),
        paddingTop: 15,
    },
    alertHeaderStyle: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: Platform.OS === "ios" ? 'center' : 'stretch',
    },
    imgSuccessStyle: {
        width: Metrics.wp('5.6%'),
        height: Metrics.wp('5.6%'),
        resizeMode: 'contain',
        marginRight: 10,
        alignSelf: 'center',
    },
    imgErrorStyle: {
        width: Metrics.wp('9%'),
        height: Metrics.wp('9%'),
        resizeMode: 'contain',
        marginRight: 10,
    },
    alertTextStyle: {
        fontFamily: Fonts.semibold,
        fontSize: 14,
        color: '#323232',
        height:  Platform.OS === "ios" ? 'auto' : '100%',
        textAlignVertical: 'center',
    },
    btnText: {
        paddingHorizontal: 15,
        height: 30,
        justifyContent: 'center',
    },
    btnTextText: {
        color: '#808080',
        fontFamily: Fonts.regular,
        fontSize: 12,
        marginRight: 15,
        textAlignVertical: 'center',
    },
    btnPrimary: {
        backgroundColor: '#00aed8',
        borderRadius: 5,
        width: Metrics.wp('25.6%'),
        height: 30,
        justifyContent: 'center',
    },
    btnPrimaryText: {
        color: '#fff',
        fontFamily: Fonts.semibold,
        fontSize: 12,
        textAlign: 'center',
    },
    errorInfo: {
        fontFamily: Fonts.semibold,
        fontSize: 10,
    }
})

export default styles