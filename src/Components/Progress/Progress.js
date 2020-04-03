
import React from 'react'

import {
    ActivityIndicator,
    View,
} from 'react-native'

import { Colors } from '../../Resources/Constants/Colors'

const Progress = (props) => {

    const size = props.size ? props.size : 'large'
    const color = props.color ? props.color : Colors.textGeneral
    
    const style = props.style ? props.style : {}
    
    return (
        <View style={style}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default Progress
