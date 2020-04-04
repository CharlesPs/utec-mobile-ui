
import React from 'react'

import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native'

import styles from './CalendarHeader.styles'

import { Metrics } from '../../Resources/Constants/Metrics'

const CalendarHeaderButton = (props) => {

    const dayNumberClass = Platform.OS === 'ios' ? styles.IOSdayNumber : styles.dayNumber;

    const dayClassSelect = Platform.OS === 'ios' ? [dayNumberClass, styles.IOSdayNumberSelected] : [dayNumberClass, styles.dayNumberSelected];

    return(
        <View style={{
            // backgroundColor: 'red'
        }}>
            <TouchableOpacity
                onPress={() => props.onSelectDay(props.day)}
            >
                <View style={
                    (props.index !== props.days.length - 1 && props.index !== 0) ? 
                        [styles.dayBtn, { paddingHorizontal: Metrics.wp('2.20%') }] : 
                        (props.index === 0 ? 
                            [styles.dayBtn, styles.dayBtnRightPadding] : 
                            [styles.dayBtn, styles.dayBtnLeftPadding])
                }>
                    <View>
                        <Text style={styles.dayName}>{props.day.name}</Text>
                        <Text style={
                            props.selectedDay === props.day.ymd ? dayClassSelect : dayNumberClass
                        }>
                            {props.day.number}
                        </Text>
                    </View>
                    {!props.day.hasEvents ? null : (
                        <View style={styles.dotContainer}>
                            <View style={styles.optionDot}></View>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CalendarHeaderButton
