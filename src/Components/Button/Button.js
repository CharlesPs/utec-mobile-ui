
import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

import styles from './Button.styles'

class Button extends React.Component {

    construct(props) {
        super(props)
    }

    render() {
    
        const {
            btnStyles,
            btnTextStyles,
            title,
            leftIcon,
            leftIconStyles,
            onPress,
            disabled,
            type,
            shadow,
        } = props
    
        let newType = type === undefined || type === "" ? "self" : type; 
        let newBtnStyles, newBtnTextStyles =  {}  
        
        switch (newType) {
            case "default": // GRAY
                newBtnStyles = styles.defaultBtn
                newBtnTextStyles = styles.defaultBtnText
                break;
            case "primary": // BLUE
                newBtnStyles = styles.primaryBtn
                newBtnTextStyles = styles.primaryBtnText
                break;
            // case "secondary":
            //     newBtnStyles = styles.secondaryBtn
            //     newBtnTextStyles = styles.secondaryBtnText
            //     break;
            // case "icon":
            //     newBtnStyles = styles.iconBtn
            //     newBtnTextStyles = styles.iconBtnText
            //     break;
            default:
                // self
                newBtnStyles = btnStyles
                newBtnTextStyles = btnTextStyles
                break;
        }
    
        if( shadow ){
            newBtnStyles = [newBtnStyles, styles.shadowBtn]
        }
    
        return(
            <View style={!disabled ? newBtnStyles : [newBtnStyles, { opacity: 0.5 }]}>
    
                <TouchableOpacity
                    disabled={disabled}
                    onPress={() => onPress()}
                    style={{width: '100%', flex: 1, justifyContent: 'center'}}
                >
                    <View style={leftIcon == null? {} : {flexDirection: 'row', height: '100%', width: '100%'}}>
                        {leftIcon == null ? null : (
                            <View style={{}}>
                                <Image style={leftIconStyles} source={leftIcon} />
                            </View>
                        )}
                        <View style={{}}>
                            <Text style={[newBtnTextStyles, {}]}> 
                                {title}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Button
