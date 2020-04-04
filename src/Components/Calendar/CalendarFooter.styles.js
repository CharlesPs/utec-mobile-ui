
import {
    StyleSheet
} from 'react-native'

// import { Fonts } from '../../Resources/Constants/Fonts'

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        width: '90%',
        height: 60,
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfdfdf',
        borderRadius: 50,
        elevation: 4,
    },
    footerBtn: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    footerBtnIcon: {
        width: 20,
        height: 20,
    },
    text:{
        // fontFamily : Fonts.semibold,
        color: '#323232'
    }
})

export default styles
