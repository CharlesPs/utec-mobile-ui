
import {
    StyleSheet
} from 'react-native'

import { Metrics } from '../../Resources/Constants/Metrics'

import { Fonts } from '../../Resources/Constants/Fonts'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f8f8f8',
        elevation: 4,
        paddingTop: 10,
        paddingBottom: 15,
    },
    btnsContainer: {
        // backgroundColor: 'green',
        alignSelf: 'center',
        flexDirection: 'row',
        width: Metrics.wp('100%'),
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'flex-end',
    },
    dayBtn: {
        width: Metrics.wp('12.2%'),
    },
    dayBtnLeftPadding: {
        paddingLeft: Metrics.wp('0%'), // 2%

    },
    dayBtnRightPadding: {
        paddingRight: Metrics.wp('0%'), // 2%

    },
    dayName: {
        // backgroundColor: 'red',
        // height: 20,
        fontSize: 12,
        marginBottom: 5,
        textAlign: 'center',
        // fontFamily : Fonts.semibold,
        color: '#323232',
    },
    dayClassSelect:{
        color: '#323232',
        // fontFamily: Fonts.semibold,
    },
    dayNumber: {
        fontSize: 13,
        // fontFamily: Fonts.semibold,
        width: Metrics.wp('6%'),
        height: Metrics.wp('6%'),
        borderRadius: 100,
        color: '#323232',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginBottom: 5,
    },
    dayNumberSelected: {
        backgroundColor: '#00aed8',
        color: '#fff',
    },


    IOSdayNumber: {
        fontSize: 13,
        width: '100%',
        height: 23,
        borderRadius: 11,
        color: '#323232',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 5,
        paddingTop: 2,
        // fontFamily: Fonts.semibold
    },
    IOSdayNumberSelected: {
        backgroundColor: '#00aed8',
        color: '#fff',
        width: 23,
        height: 23,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 11,
        overflow: "hidden",
        paddingTop: 2,
    },
    dotContainer: {
        width: '100%',
        height: 5,
        alignItems: 'center',
    },
    optionDot: {
        width: 4,
        height: 4,
        borderRadius: 100,
        backgroundColor: '#00aed8',
    },
    selectedStringContainer: {
        justifyContent: 'center',
    },
    selectedStringInfo: {
        // fontFamily: Fonts.semibold,
        fontSize: Metrics.wp('3.4%') ,
        textAlign: 'center',
        color: '#323232',
    },
})

export default styles
