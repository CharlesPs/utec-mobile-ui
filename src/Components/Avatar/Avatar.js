
// needs 
// rn-fetch-blob@^0.12.0 
// react-native-exif2@^0.4.1 
// to be added

import React, { useState } from 'react'

import {
    View,
    Image,
} from 'react-native'

import Progress from '../../Components/Progress/Progress'

import ImagesHelper from '../../Helpers/ImagesHelper'

import styles from './Avatar.styles'

const Avatar = (props) => {

    const [orientation, setOrientation] = useState(undefined)

    const size = props.size || 128

    const url = props.url || undefined

    const loading = props.loading || (<Progress color="#999" size={size / 3} />)

    const getOrientation = async () => {

        if (!props.url) {

            return
        }

        try {
            
            const _orientation = await ImagesHelper.getImageOrientation(props.url, 'avatar_' + props.userId)

            setOrientation(_orientation)
        } catch (error) {
            
            console.log('Avatar.render', error.message)
        }
    }
    
    getOrientation()

    return(
        <View style={[
            styles.avatarContainer,
            {
                width: size,
                height: size,
            },
            {
                borderRadius: size / 2
            }
        ]}>
            <Image
                style={styles.avatarPlaceholder}
                source={require("./no_avatar.png")}
            />
            {orientation === undefined && url !== undefined ? (
                // null
                <View style={[
                    styles.avatar, 
                    {
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }
                ]}>
                    {loading}
                </View>
            ) : (
                <Image
                    style={styles.avatar}
                    source={{ uri: url }}
                />
            )}
        </View>
    )
}

export default Avatar
