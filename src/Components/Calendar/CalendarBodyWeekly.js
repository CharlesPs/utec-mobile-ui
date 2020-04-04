
import React from 'react'

import {
    ScrollView,
    View,
    Text,
} from 'react-native'

import styles from './CalendarBodyWeekly.styles'
import { Metrics } from '../../Resources/Constants/Metrics'

import moment from 'moment'

const CalendarBodyWeekly = (props) => {

    const {
        hours,
        hourHeight,
        events,
        language,
    } = props

    const getDayPosition = (event) => {

        let day = moment.unix(event.startsAt).day() - 1
        day = (day == -1) ? 6 : day

        return (day == 0) ? -2 : day * Metrics.wp('12.2%') - 2
    }

    const getHourPosition = (event) => {

        const start_string = moment.unix(event.startsAt).format('YYYY-MM-DD') + ' 06:00:00'

        const startMoment = moment(start_string, 'YYYY-MM-DD HH:mm:ss')

        const diff = moment.unix(event.startsAt).diff(startMoment, 'minutes')

        return (diff * hourHeight / 60)
    }

    const getDuration = (event) => {

        const {
            startsAt,
            endsAt
        } = event

        const diff = moment.unix(endsAt).diff(moment.unix(startsAt), 'minutes')

        return (diff * hourHeight / 60) - 1
    }

    return (
        <ScrollView style={styles.calendarBodyWeekly}>
            <View style={styles.scheduleBody}>
                {/* grid hours */}
                <View style={styles.scheduleTimeContainer}>
                    <View style={styles.timeElements}>
                        {hours.map((hour, i) => (
                            <View key={i}>
                                <Text>{hour}:00</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.scheduleGridContainer}>
                    {/* grid rows */}
                    {hours.map((hour, i) => {
                        if (i != (hours.length - 1))
                            return (
                                <View key={i}
                                    style={[
                                        styles.scheduleWeekGrid,
                                        (i == 0)
                                            ? {
                                                height: (hourHeight),
                                                borderTopWidth: 1,
                                                borderBottomWidth: 1,
                                                // backgroundColor: 'orange',
                                            } : {
                                                height: (hourHeight),
                                                borderBottomWidth: 1
                                            },
                                        (i == hours.length - 1) ? { borderBottomWidth: 1 } : {}
                                    ]}
                                >
                                    <View style={[styles.scheduleWeekGridColumn, { width: Metrics.wp('12.5%') - 2}]} />
                                    <View style={styles.scheduleWeekGridColumn} />
                                    <View style={styles.scheduleWeekGridColumn} />
                                    <View style={styles.scheduleWeekGridColumn} />
                                    <View style={styles.scheduleWeekGridColumn} />
                                    <View style={styles.scheduleWeekGridColumn} />
                                    <View style={[styles.scheduleWeekGridColumn, {borderRightWidth: 0}]} />
                                </View>
                            )
                    })}
                    {/* calendar events */}
                    <View style={[styles.scheduleWeekContainer]}>
                        <View style={{ position: 'relative' }}>
                            {events.map((event, i) => (
                                <View key={i} style={[

                                    styles.scheduleWeekElement,
                                    {
                                        position: 'absolute',
                                        left: getDayPosition(event),
                                        top: getHourPosition(event),
                                        height: getDuration(event),
                                        width: Metrics.wp('12.5%') - 3
                                    }
                                    ]}>
                                    <Text numberOfLines={2} style={styles.scheduleWeekElementText}>
                                        {event.title}
                                    </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text numberOfLines={1} style={[styles.scheduleWeekElementText]}>
                                            {language.classroom}
                                        </Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.scheduleWeekElementText}>
                                        {event.classroom}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default CalendarBodyWeekly
