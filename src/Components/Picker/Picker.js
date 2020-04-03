
import React from 'react'

import {
    View,
    Text,
    Picker as NativePicker,
    Platform,
} from 'react-native'

import RNPickerSelect from 'react-native-picker-select'

import {
    rnPickerStylesDefault,
    rnPickerStylesPrimary,
    rnPickerStylesSecondary,
    rnPickerStylesSecondaryBig,
    rnPickerStylesSimple,
    newAndroidPickerAlpha,
    newAndroidPickerAlpha2,
    newAndroidPickerAlpha3
} from "./Picker.styles";

class Picker extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: undefined,
            androidSelected: undefined,
            items: [],
            placeholder: {}
        }

        this._picker = React.createRef()
    }

    componentDidMount() {

        this.getPlaceholder()
    }

    getPlaceholder() {
        
        if (!this.props.placeholder) {

            this.setState({
                selected: 0
            }, this.getItems())

        } else {

            const placeholder = {
                key: 0,
                label: this.props.placeholder,
                value: '',
            }

            this.setState({
                selected: 0,
                placeholder,
            }, this.getItems)
        }
    }

    getItems() {

        const addWhenPlaceholder = this.props.placeholder ?  1 : 0

        const items = []

        if (Platform.OS === 'android' && this.state.selected !== undefined) {

            items.push(this.state.placeholder)
        }

        this.props.items.map((item, i) => {

            item.key = (i + addWhenPlaceholder)

            items.push(item)
        })

        this.setState({
            items
        }, this.autoSelectFirst)
    }

    autoSelectFirst() {

        if (this.props.placeholder) {

            return this.onItemSelected(undefined)
        }

        const {
            items,
            selected,
        } = this.state

        this.onItemSelected(items[selected].value)
    }

    getStyles(type = 'default') {

        switch(type) {
            case 'primary':
                return rnPickerStylesPrimary
            case 'secondary':
                return rnPickerStylesSecondary
            case 'secondary-big':
                return rnPickerStylesSecondaryBig
            case 'simple':
                return rnPickerStylesSimple
            case 'android-primary':
                return newAndroidPickerAlpha
            case 'android-secondary':
                return newAndroidPickerAlpha2
            case 'android-blueborder':
                return newAndroidPickerAlpha3
            case 'default':
                return rnPickerStylesDefault
        }
    }

    onItemSelected(_value) {

        const value = _value || undefined

        console.log('value', value)

        if (typeof this.props.onItemSelected !== undefined) {

            this.props.onItemSelected(value)
        }
    }

    render() {

        const defaults = {
            android: {
                useNativeAndroidPickerStyle: false,
            },
            ios: {
                doneText: 'Terminar'
            },
        }
        
        const options = Object.assign(defaults, this.props.options)

        let type

        if (typeof this.props.type === 'String') {

            type = this.props.type
        } else if (typeof this.props.type === 'object') {

            type = this.props.type[Platform.OS]
        }

        const pickerStyles = this.getStyles(type)

        const {
            selected,
            androidSelected,
            items,
            placeholder,
        } = this.state

        return(
            <>
                {
                    {
                        'ios': (
                            <>
                                {selected === undefined ? null : (
                                    <RNPickerSelect
                                        pickerProps={options.pickerProps}
                                        onValueChange={value => this.onItemSelected(value)}
                                        items={items}
                                        itemKey={selected}
                                        Icon={() => (
                                            <View
                                                style={{
                                                    backgroundColor: "transparent",
                                                    borderTopWidth: 7,
                                                    borderTopColor: "black",
                                                    borderRightWidth: 7,
                                                    borderRightColor: "transparent",
                                                    borderLeftWidth: 7,
                                                    borderLeftColor: "transparent",
                                                    width: 0,
                                                    height: 0
                                                }}
                                            />
                                        )}
                                        placeholder={placeholder}
                                        doneText={options.ios.doneText}
                                        style={pickerStyles}
                                        ref={this._picker}
                                    />
                                )}
                            </>
                        ),
                        'android': (
                            <>
                                {selected === undefined ? null : (
                                    <View style={pickerStyles.headlessAndroidContainer}>
                                        <View style={pickerStyles.inputAndroidContainer}>
                                            {
                                                items.length == 0 ? null : (
                                                    <Text style={pickerStyles.inputAndroid}>
                                                        {items[selected].label}
                                                    </Text>
                                                )
                                            }

                                            <View style={pickerStyles.iconContainer}></View>
                                        </View>
                                        <NativePicker
                                            selectedValue={androidSelected}
                                            style={{
                                                position: "absolute",
                                                backgroundColor: "transparent",
                                                margin: 0,
                                                padding: 0,
                                                color: "transparent",
                                                top: 0,
                                                bottom: 0,
                                                left: 0,
                                                right: 0
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {

                                                this.setState(
                                                    {
                                                        selected: itemIndex,
                                                        androidSelected: itemValue
                                                    },
                                                    this.onItemSelected(itemValue)
                                                )
                                            }}
                                            ref={c => (this._picker = c)}
                                        >
                                            {items.map(item => (
                                                <NativePicker.Item key={item.key} label={item.label} value={item.value} />
                                            ))}
                                        </NativePicker>
                                    </View>
                                )}
                            </>
                        )
                    }[Platform.OS]
                }
            </>
        )
    }
}

export default Picker