
import {
    StyleSheet
} from 'react-native'

// import {Fonts} from '../../Resources/Constants/Fonts'

const styles = StyleSheet.create({
    calendarBodyDayly: {
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
        flex: 12,
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
        // backgroundColor: 'orange',
    },
    scheduleGrid: {
        // flex: 1,
        // height: 60,
        paddingTop: 1,
        // paddingBottom: 1,
        paddingLeft: 9,
        paddingRight: 10,
        marginLeft: -8,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: '#e7e7e9',
    },
    coursesContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        width: '100%',
        // backgroundColor: 'red' #esto es lo que causaba el error de desaparicion en versiones menores a 8
    },
    scheduleDayElement: {
        flex: 1,
        width: '96%',
        backgroundColor: '#5384ed',
        borderWidth: 1,
        borderColor: '#4178e8',
        borderRadius: 5,
        position: 'absolute',
        left: 0,
        paddingHorizontal: 10,

    },
    scheduleDayElementText: {
        color: '#fff',
        // fontFamily: Fonts.semibold,
    },
    hora:{
        // fontFamily : Fonts.regular,
        fontSize : 12
    }
})

export default styles
