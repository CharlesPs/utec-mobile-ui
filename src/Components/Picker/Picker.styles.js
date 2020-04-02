
import {
    StyleSheet,
    Platform
} from 'react-native'

// import { Fonts } from '../../Resources/Constants/Fonts'
import { Colors } from '../../Resources/Constants/Colors'
import { Metrics } from '../../Resources/Constants/Metrics'

const rnPickerStylesDefault = StyleSheet.create({
    headlessAndroidContainer: {
        // backgroundColor: "blue"
    },
    inputAndroidContainer: {
        // backgroundColor: "blue",
    },
    inputAndroid: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#323232",
        borderWidth: 2
    },
    inputIOS: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#323232",
        borderWidth: 1,
    },
    iconContainer: {
        top: 15,
        right: 22,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
    }
});

const rnPickerStylesPrimary = StyleSheet.create({
    inputAndroid: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#323232",
        backgroundColor: "#fff",
        borderColor: "#00aed8",
        borderWidth: 2
    },
    inputIOS: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#323232",
        backgroundColor: "#fff",
        borderColor: "#00aed8",
        borderWidth: 1,
    },
    iconContainer: {
        top: Platform.OS === 'ios' ? 10:15,
        right: 22,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
    }
});

const rnPickerStylesSecondary = StyleSheet.create({
    headlessAndroidContainer: {
        // backgroundColor: "blue"
    },
    inputAndroidContainer: {
        // backgroundColor: "blue",
    },
    inputAndroid: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#323232",
        borderWidth: 2
    },
    inputIOS: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#323232",
        borderWidth: 1,
    },
    iconContainer: {
        top: 15,
        right: 22,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
    }
});

const rnPickerStylesSecondaryBig = StyleSheet.create({
    headlessAndroidContainer: {
        // backgroundColor: "blue"
    },
    inputAndroidContainer: {
        // backgroundColor: "blue",
    },
    inputAndroid: {
        height: 40,
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 10,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#c7c7c7",
        borderWidth: 2
    },
    inputIOS: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 10,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
        borderColor: "#c7c7c7",
        borderWidth: 1,
        // backgroundColor: "blue",
    },
    iconContainer: {
        top: Platform.OS === 'ios' ? 15 : 17,
        right: 22,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
        // backgroundColor: "pink",
    }
});

const rnPickerStylesSimple = StyleSheet.create({
    headlessAndroidContainer: {
        // backgroundColor: "blue"
    },
    inputAndroidContainer: {
        // backgroundColor: "blue",
    },
    inputAndroid: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        // textAlign:'left',
    },
    inputIOS: {
        fontSize: 10,
        fontFamily: Fonts.regular,
        paddingVertical: 5,
        paddingRight: 30,
        paddingLeft: 10,
        borderRadius: 5,
        color: "#000",
        textAlign:'right',
    },
    iconContainer: {
        top: Platform.OS === 'ios' ? 9 : 17,
        right: 22,
        width: 0,
        height: 0,
    },
    placeholder: {
        color: "#323232"
    }
})

const newAndroidPickerAlpha = StyleSheet.create({
    headlessAndroidContainer: {
        borderWidth: 0,
        position: "relative",
        height: 40
    },
    inputAndroidContainer: {
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderColor: "#c7c7c7",
        backgroundColor: "#fff"
    },
    inputAndroid: {
        // backgroundColor: "blue",
        paddingRight: 20,
        color: "#000",
        height: "100%",
        textAlignVertical: "center",
        fontFamily: Fonts.regular,
        fontSize: 9
    },
    inputIOS: {},
    iconContainer: {
        position: "absolute",
        alignItems: "center",
        backgroundColor: "transparent",
        // backgroundColor: "red",
        borderTopWidth: 6,
        borderTopColor: "#000",
        borderRightWidth: 6,
        borderRightColor: "transparent",
        borderLeftWidth: 6,
        borderLeftColor: "transparent",
        top: 15,
        right: 5,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
    }
});

const newAndroidPickerAlpha2 = StyleSheet.create({
    headlessAndroidContainer: {
        borderWidth: 0,
        position: "relative",
        height: 40
    },
    inputAndroidContainer: {
        height: 40,
        paddingHorizontal: 5,
        // borderRadius: 5,
        borderWidth: 0,
        // borderColor: "#c7c7c7",
        backgroundColor: "transparent",
        // backgroundColor: "red",
    },
    inputAndroid: {
        // backgroundColor: "blue",
        paddingRight: 20,
        color: "#000",
        height: "100%",
        textAlignVertical: "center",
        fontFamily: Fonts.regular,
        fontSize: 9
    },
    inputIOS: {},
    iconContainer: {
        position: "absolute",
        alignItems: "center",
        backgroundColor: "transparent",
        // backgroundColor: "red",
        borderTopWidth: 6,
        borderTopColor: "#000",
        borderRightWidth: 6,
        borderRightColor: "transparent",
        borderLeftWidth: 6,
        borderLeftColor: "transparent",
        top: 17,
        right: 5,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
    }
});

const newAndroidPickerAlpha3 = StyleSheet.create({
    headlessAndroidContainer: {
        borderWidth: 0,
        position: "relative",
        height: 30
    },
    inputAndroidContainer: {
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#00aed8",
        backgroundColor: "transparent"
        // backgroundColor: "red",
    },
    inputAndroid: {
        // backgroundColor: "blue",
        paddingRight: 20,
        color: "#000",
        height: "100%",
        textAlignVertical: "center",
        fontFamily: Fonts.regular,
        fontSize: 9
    },
    inputIOS: {},
    iconContainer: {
        position: "absolute",
        alignItems: "center",
        backgroundColor: "transparent",
        // backgroundColor: "red",
        borderTopWidth: 6,
        borderTopColor: "#000",
        borderRightWidth: 6,
        borderRightColor: "transparent",
        borderLeftWidth: 6,
        borderLeftColor: "transparent",
        top: 10,
        right: 5,
        width: 0,
        height: 0
    },
    placeholder: {
        color: "#323232"
    }
});

export {
    rnPickerStylesDefault,
    rnPickerStylesPrimary,
    rnPickerStylesSecondary,
    rnPickerStylesSecondaryBig,
    rnPickerStylesSimple,
    newAndroidPickerAlpha,
    newAndroidPickerAlpha2,
    newAndroidPickerAlpha3
};
