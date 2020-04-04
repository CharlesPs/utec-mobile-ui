
import React from 'react'

import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native'

import styles from './RightIcon.styles'

const RightIcon = (props) => {

    const {
        rightIcon,
        iconWidth,
        iconHeight,
        onPress,
        disabled,
    } = props

    return(
        <View style={styles.iconContainer}>
            <TouchableOpacity
                onPress= {onPress}
                disabled= {disabled}
            >
                <Image

                    style={[styles.icon, iconWidth != null ? ({ width: iconWidth }) : ({ width: 12 }), ({ zIndex: 9999 }), iconHeight != null ? ({ height: iconHeight }) : ({height:25})] }
                    source={rightIcon != null ? (rightIcon) : (require('./right_icon.png'))}
                />
            </TouchableOpacity>
        </View>
    )
}

export default RightIcon