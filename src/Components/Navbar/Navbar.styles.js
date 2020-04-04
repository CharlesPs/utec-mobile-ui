
import {
    StyleSheet,
    Platform,
} from 'react-native'

import { Metrics } from '../../Resources/Constants/Metrics'

// import {Fonts} from '../../Resources/Constants/Fonts'

import {Colors} from '../../Resources/Constants/Colors'

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: Colors.navBarBackground,
        flexDirection: 'row',
        // height: 56,
        height: Metrics.hp('8.2%'),
    },
    navBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
    },
    navBarLeftButton: {
        width: 56,
        // backgroundColor: 'red',
    },
    navBarRightButton: {
        width: 56,
        // backgroundColor: 'blue',
    },
    navBarTitle: {
        flex: 1,
    },
    navBarText: {
        color: Colors.navBarText,
        textAlign: 'center',
        // fontFamily: Fonts.semibold,
        height: '100%',
        fontSize: Metrics.navBarTitleFontSize,
        textAlignVertical: 'center',
        lineHeight: Platform.OS === 'ios' ? 60 : null,
    },
    btnContainer: {
        // flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    btn: {
        width: 20,
        // height: 25,
        // backgroundColor: 'blue',
        resizeMode: 'contain',
    },
});

export default styles