
import React from 'react'

import {
    ActivityIndicator,
    View,
} from 'react-native'

import { Colors } from '../../Resources/Constants/Colors'

const Progress = (props) => {

    let size = props.size ? props.size : 'large'

    if (Platform.OS === 'ios' && (size !== 'small' && size !== 'large')) {

        size = 'large'
    }

    const color = props.color ? props.color : Colors.textGeneral
    
    const style = props.style ? props.style : {}
    
    return (
        <View style={[style, {padding: Platform.OS === 'ios' ? 2 : 0}]}>
            <ActivityIndicator size={size} color={color} />
        </View>
    )
}

export default Progress
