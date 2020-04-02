
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
            selected: {
                index: 0,
                label: '',
                value: ''
            }
        }

        this._picker = React.createRef()
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

    onItemSelected(value) {

        if (typeof this.props.onItemSelected !== undefined) {

            this.props.onItemSelected(value)
        }
    }

    render() {

        const defaults = {
            selected: '',
            placeholder: {
                label: 'Seleccionar',
                value: null,
                color: 'transparent',
            },
            android: {
                useNativeAndroidPickerStyle: false,
            },
            ios: {
                doneText: 'Terminar'
            },
        }

        const options = Object.assign(defaults, this.props.options)

        const items = this.props.items || []

        const pickerStyles = this.getStyles(this.props.type)

        return(
            <>
                {
                    {
                        'ios': (
                            <>
                                <RNPickerSelect
                                    pickerProps={options.pickerProps}
                                    onValueChange={value => this.onItemSelected(value)}
                                    items={items}
                                    itemKey={options.selected}
                                    Icon={() => {
                                        return (
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
                                        );
                                    }}
                                    placeholder={options.placeholder}
                                    doneText={options.doneText}
                                    style={pickerStyles}
                                    ref={this._picker}
                                />
                            </>
                        ),
                        'android': (
                            <View style={pickerStyles.headlessAndroidContainer}>
                                <View style={pickerStyles.inputAndroidContainer}>
                                    {
                                        items.length == 0 ? null : (
                                            <Text style={pickerStyles.inputAndroid}>
                                                {items[this.state.selected.index].label}
                                            </Text>
                                        )
                                    }

                                    <View style={pickerStyles.iconContainer}></View>
                                </View>
                                <NativePicker
                                    selectedValue={this.state.selected.value}
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
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState(
                                            {
                                                selected: {
                                                    index: itemIndex,
                                                    value: itemValue
                                                }
                                            },
                                            this.options.onItemSelected(itemValue)
                                        )
                                    }
                                    ref={c => (this._picker = c)}
                                >
                                    {items.map((item, i) => (
                                        <NativePicker.Item key={i} label={item.label} value={item.value} />
                                    ))}
                                </NativePicker>
                            </View>
                        )
                    }[Platform.OS]
                }
            </>
        )
    }
}

export default Picker