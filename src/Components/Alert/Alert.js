
import React from 'react'

import {
    View,
    Text,
    Modal,
    Image,
} from 'react-native'

import Button from '../Button/Button'

import styles from './Alert.styles'

class Alert extends React.Component {

    static myInstance

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            message: '',
            type: '',
            buttons: []
        }

        Alert.myInstance = this
    }

    static show(message, type, buttons = []) {

        this.myInstance._show(message, type, buttons)
    }

    static close() {

        this.myInstance._close()
    }

    getBgStyle(type) {

        if (type === 'text') {

            return styles.btnText
        } else if (type === 'primary') {

            return styles.btnPrimary
        }
    }

    getImage(type) {

        if (type === 'success') {

            return require('./check_alert.png')
        } else if (type === 'warning') {

            return require('./caution_icon.png')
        }
    }

    getImageStyle(type) {

        if (type === 'success') {

            return styles.imgSuccessStyle
        } else if (type === 'warning') {

            return styles.imgErrorStyle
        }
    }

    getTextStyle(type) {

        if (type === 'text') {

            return styles.btnTextText
        } else if (type === 'primary') {

            return styles.btnPrimaryText
        }
    }

    addCloseDefaultButton() {

        const buttons = []

        buttons.push({
            title: 'Cerrar',
            type: 'primary',
            onPress: () => this._close()
        })

        return buttons
    }

    _show(message, type, buttons) {

        if (!buttons.length) {

            buttons = this.addCloseDefaultButton()
        }

        this.setState({
            message,
            type,
            buttons,
            visible: true,
        })
    }

    _close() {

        this.setState({
            visible: false
        })
    }

    render() {

        const {
            visible,
            message,
            type,
            buttons,
        } = this.state

        return (
            <View>
                <Modal
                    style={styles.modal}
                    visible={visible}
                    transparent={true}
                    animationType={"none"}
                >
                    <View style={styles.alertContainer}>
                        <View style={styles.alert}>
                            <View style={type === 'warning' ? styles.alertHeaderStyle : [styles.alertHeaderStyle, {justifyContent: 'center'}]}>
                                <Image style={this.getImageStyle(type)} source={this.getImage(type)} />
                                {
                                    typeof (message) === 'object' ? (
                                        <Text numberOfLines={3} style={[styles.alertTextStyle, {flex: 1}]}>
                                            {message.content}
                                        </Text>
                                    ) : (
                                            <Text numberOfLines={3} style={[styles.alertTextStyle, {textAlign: 'center'}]}>
                                                {message}
                                            </Text>
                                        )
                                }

                            </View>
                            <View>
                                {
                                    typeof (message) !== 'object' ? (null) : (
                                        <View>
                                            <Text style={styles.errorInfo}>
                                                {`status : ${message.status}`}
                                            </Text>
                                            <Text style={styles.errorInfo}>
                                                {`request ID : ${message.requestId}`}
                                            </Text>
                                        </View>
                                    )
                                }
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 10}}>
                                {buttons.map((button, i) => (
                                    <Button key={i}
                                        title={button.title}
                                        onPress={button.onPress}
                                        btnStyles={this.getBgStyle(button.type)}
                                        btnTextStyles={this.getTextStyle(button.type)}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Alert
