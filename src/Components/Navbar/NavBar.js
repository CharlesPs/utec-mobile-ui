
import React from 'react'

import {
    View,
    Text,
} from 'react-native'

import styles from './NavBar.styles'

import NavBarButton from './NavBarButton'

const NavBar = (props) => {

    const {
        title,
        backgroundColor,
        textColor,
        backButton,
        actionButton,
        disabledActionBtn,
    } = props

    const navBar = { ...styles.navBar }
    navBar.backgroundColor = (backgroundColor) ? backgroundColor : navBar.backgroundColor

    const navBarText = { ...styles.navBarText }
    navBarText.color = (textColor) ? textColor : navBarText.color

    return (
        <View style={navBar}>
            <View style={styles.navBarLeftButton}>
                {(!backButton) ? (null) : (
                    <NavBarButton
                        image={backButton.image}
                        onPress={backButton.onPress}
                    />
                )}
            </View>
            <View style={styles.navBarTitle}>
                <Text numberOfLines={2} style={navBarText}>{title}</Text>
            </View>
            <View style={styles.navBarRightButton}>
                {(!actionButton) ? (null) : (
                    <NavBarButton
                        disabledBtn={disabledActionBtn}
                        image={actionButton.image}
                        onPress={actionButton.onPress}
                    />
                )}
            </View>
        </View>
    )
}

export default NavBar