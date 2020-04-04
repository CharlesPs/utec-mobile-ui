
import React from 'react'

import {
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native'

import RightIcon from '../RightIcon/RightIcon'

import styles from './MenuButton.styles'

const MenuButton = (props) => {

    const {
        title,
        titleStyle,
        icon,
        rightIconWidth,
        rightIconHeight,
        onPress,
        rightIcon,
        nextBtn,
        touchableOpacityDisabled,
        rightIconEvent,
        selected,
    } = props

    return (
        <View style={selected != null && selected ? [styles.card, styles.SelectedCard] : (styles.card)}>
            <TouchableOpacity
                disabled={touchableOpacityDisabled}
                onPress={onPress}>
                <View style={styles.buttons}>
                    <Image style={[styles.icon]} source={icon} />
                    <Text numberOfLines={2} style={titleStyle != null ? titleStyle : styles.cardTitle}>{title}</Text>
                    {nextBtn && rightIcon != undefined ? null : (
                        <RightIcon disabled={false}
                            rightIcon={rightIcon}
                            onPress={rightIconEvent ? rightIconEvent : onPress}
                            iconWidth={rightIconWidth}
                            iconHeight={rightIconHeight}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default MenuButton
