
import React from 'react'

import {
    Modal,
    View,
} from 'react-native'

import styles from './Loader.styles'

import Progress from '../Progress/Progress'

const Loader = (props) => {

    const {
        visible,
    } = props
    
    return(
        <Modal visible={visible}
            transparent={true}
            animationType={'none'}
        >
            <View style={styles.modalBackground}>
                <Progress /> 
            </View>
        </Modal>
    )
}

export default Loader
