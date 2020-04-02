
import {
    StyleSheet,
    Platform
} from 'react-native'

// import { Fonts } from '../../Resources/Constants/Fonts'
import { Colors } from '../../Resources/Constants/Colors'

const styles = StyleSheet.create({
    appButton:{
    },
    disabledBtn:{
        opacity: 0.5,
    },
    //
    defaultBtn:{ 
        backgroundColor: Colors.btnDefault, 
        marginTop: 7.5,
        marginBottom: 7.5,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: 'center',
        justifyContent: 'center', 
        borderRadius: 5,
        width: "auto",
        height: 40,
        paddingVertical: Platform.OS === 'ios' ? 10:0,
        paddingHorizontal: Platform.OS === 'ios' ? 15:0,
        borderColor: '#c7c7c7',
        borderWidth: 1,
    },
    defaultBtnText:{
        paddingHorizontal: 15,
        textAlignVertical: 'center',
        alignSelf: 'center', 
        fontSize: 12.5,
        color: Colors.btnDefaultText, 
        // fontFamily: Fonts.bold,
        height: Platform.OS === 'ios' ? 'auto' : '100%',
    },
    //
    primaryBtn:{ 
        backgroundColor: Colors.btnPrimary, 
        marginTop: 7.5,
        marginBottom: 7.5,
        marginLeft: 15,
        marginRight: 15,
        alignSelf: 'center',
        justifyContent: 'center', 
        borderRadius: 5,
        width: "auto",
        height: 40,
        paddingVertical: Platform.OS === 'ios' ? 10:0,
        paddingHorizontal: Platform.OS === 'ios' ? 15:0,
        borderColor: '#c7c7c7',
        borderWidth: 1,
    },
    primaryBtnText:{
        paddingHorizontal: 15,
        textAlignVertical: 'center',
        alignSelf: 'center', 
        fontSize: 12.5,
        color: Colors.btnPrimaryText, 
        // fontFamily: Fonts.bold,
        height: Platform.OS === 'ios' ? 'auto' : '100%',
    },
    // secondaryBtn:{},
    // iconBtn:{},
    shadowBtn:{
        // SHADOW COLOR FOR ANDROID
        elevation: 4,
        // SHADOW COLOR FOR IOS
        shadowColor: '#cccddd',  
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4,
        shadowOpacity: 0.5,
    },
})

export default styles