
import {
    StyleSheet
} from 'react-native'
import { Metrics } from '../../Resources/Constants/Metrics'

// import { Fonts } from '../../Resources/Constants/Fonts'

const styles = StyleSheet.create({
    calendarBodyWeekly: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 25,
    },
    scheduleBody: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 85,
    },
    scheduleTimeContainer: {
        width: Metrics.wp('14.6%'),
        marginBottom: -8,
        borderRightWidth: 1,
        borderColor: '#e7e7e9',
    },
    timeElements: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: 10,
        flex: 1,
    },
    timeElement: {
        marginBottom: 41,
    },
    scheduleGridContainer: {
        flex: 75,
        paddingTop: 10,
        position: 'relative',
    },
    scheduleWeekGrid: {
        flexDirection: 'row',
        paddingLeft: 9,
        paddingRight: 0,
        marginLeft: -8,
        borderColor: '#e7e7e9',
    },
    scheduleWeekGridColumn: {
        width: Metrics.wp('12.2%'),
        borderColor: '#edecf0',
        borderRightWidth: 1,
    },
    scheduleWeekContainer: {
        width: '100%',
        paddingTop: 10,
        paddingRight: 10,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    scheduleWeekElement: {
        backgroundColor: '#5384ed',
        borderWidth: 1,
        borderColor: '#4178e8',
        borderRadius: 5,
        marginHorizontal: 2,
        padding: 3,
    },
    scheduleWeekElementText: {
        color: '#fff',
        // fontFamily: Fonts.regular,
        fontSize: 10,
    },
})

export default styles
