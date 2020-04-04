
import React from 'react'

import {
    ScrollView,
    View,
    Text,
} from 'react-native'

import styles from './CalendarBodyDayly.styles'

import moment from 'moment'

const CalendarBodyDayly = (props) => {

    const {
        selectedDay,
        hours,
        hourHeight,
        events,
        language,
    } = props

    const drawGridRow = (i) =>  {

        const estilo = {
            ...styles.scheduleGrid,
        }

        if (i == 0) {
            estilo.height = hourHeight
            estilo.borderTopWidth = 1
            estilo.borderBottomWidth = 1
        } else {
            estilo.height = hourHeight
            estilo.borderBottomWidth = 1
        }

        return estilo
    }

    const getEventDurationMinutes = (event) => {

        const {
            startsAt,
            endsAt
        } = event

        const diff = moment.unix(endsAt).diff(moment.unix(startsAt), 'minutes')

        return diff
    }

    const getEventPosition = (event) => {

        const startString = moment.unix(event.startsAt).format('YYYY-MM-DD') + ' 06:00:00'

        const startMoment = moment(startString, 'YYYY-MM-DD HH:mm:ss')

        const diff = moment.unix(event.startsAt).diff(startMoment, 'minutes')

        return (diff * hourHeight / 60)
    }

    return(
        <ScrollView style={styles.calendarBodyDayly}>
            <View style={styles.scheduleBody}>
                {/* grid hours */}
                <View style={styles.scheduleTimeContainer}>
                    <View style={styles.timeElements}>
                        {hours.map((hour, i) => (
                            <View key={i}>
                                <Text style={styles.hora}>{hour}:00</Text>
                            </View>
                        ))}
                    </View>
                </View>
                {/* grid rows */}
                <View style={styles.scheduleGridContainer}>
                    {hours.map((hour, i) => {
                        if (i != (hours.length - 1))
                            return <View key={i} style={drawGridRow(i)} />
                    })}
                    {/* calendar events */}
                    <View style={styles.coursesContainer}>
                        <View style={styles.courses}>
                            {events.map((event, i) => {

                                const eventDay = moment.unix(event.startsAt).format('YYYY-MM-DD')

                                if (selectedDay === eventDay) {

                                    return (
                                        <View
                                            key={i}
                                            style={[
                                                styles.scheduleDayElement,
                                                {
                                                    height: (getEventDurationMinutes(event) * hourHeight / 60),
                                                    top: getEventPosition(event)
                                                }
                                            ]}
                                        >
                                            <Text style={[styles.scheduleDayElementText]}>
                                                {event.title + ' ' + language.classroom + ' ' + event.classroom}
                                            </Text>
                                        </View>
                                    )
                                }
                            })}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default CalendarBodyDayly
