
import React from 'react'

import {
    View,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native'

import styles from './CalendarFooter.styles'

const CalendarFooter = (props) => {

    const {
        language,
        mode,
        onDayClick,
        onWeekClick,
    } = props

    return (
        <View style={styles.footer}>
            <View>
                <TouchableOpacity onPress={() => onDayClick()}>
                    <View style={[styles.footerBtn, { marginRight: 15,}]}>
                        <Image
                            style={styles.footerBtnIcon}
                            source={
                                mode == 'MODE_DAYLY'
                                ? require('../../Resources/Images/schedule_day_active.png')
                                : require('../../Resources/Images/schedule_day_inactive.png')
                            }
                        />
                        <Text style={mode == 'MODE_DAYLY' ? styles.text : [styles.text, { color: '#a3a3a3' }]}>{language.day}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => onWeekClick()}>
                    <View style={styles.footerBtn}>
                        <Image
                            style={[styles.footerBtnIcon]}
                            source={
                                mode == 'MODE_WEEKLY'
                                ? require('../../Resources/Images/schedule_week_active.png')
                                : require('../../Resources/Images/schedule_week_inactive.png')
                            }
                        />
                        <Text style={mode == 'MODE_WEEKLY' ? [styles.text] : [styles.text, { color: '#a3a3a3' }]}>{language.week}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CalendarFooter
