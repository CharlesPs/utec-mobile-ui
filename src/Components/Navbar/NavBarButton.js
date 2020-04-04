
import React from 'react'

import {
    TouchableOpacity,
    View,
    Image,
} from 'react-native'

import styles from './NavBar.styles'

const NavBarButton = (props) => {

    const {
        image,
        onPress,
        rojo,
        disabledBtn,
    } = props

    return (
        <TouchableOpacity style={styles.navBarButton} onPress={onPress} disabled={disabledBtn}>
            <View style={styles.btnContainer}>
                <Image style={styles.btn} source={image} />
            </View>
        </TouchableOpacity>
    );
}

export default NavBarButton
