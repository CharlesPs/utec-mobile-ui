
import React, { useState } from 'react'

import { View, Text, ScrollView } from 'react-native'

import styles from './Calendar.styles'

import CalendarHeader from './CalendarHeader'
import CalendarBodyDayly from './CalendarBodyDayly'
import CalendarBodyWeekly from './CalendarBodyWeekly'
import CalendarFooter from './CalendarFooter'

import moment from 'moment'

const Calendar = (props) => {

    const [mode, setMode] = useState(props.mode || 'MODE_DAYLY')

    const defaultLang = {
        code: 'en',
        day: 'Day',
        week: 'Week',
        classroom: 'Classroom',
        days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    }

    const language = Object.assign(defaultLang, props.language)

    const weekTitle = props.weekTitle || 'No week title'

    const selectedDay = props.selectedDay
    
    const events = props.events || []

    const days = getDays(selectedDay, events, language)

    return (
        <View style={styles.calendarContainer}>
            <CalendarHeader 
                weekTitle={weekTitle} 
                days={days}
                mode={mode} 
                language={language} 
                selectedDay={selectedDay}
                onSelectDay={(day) => {

                    props.onSelectDay(day.ymd)
                }}
            />
            {
                {
                    'MODE_DAYLY': (
                        <CalendarBodyDayly
                            selectedDay={selectedDay}
                            hours={getUIHours()}
                            language={language}
                            hourHeight={60}
                            events={events}
                        />
                    ),
                    'MODE_WEEKLY': (
                        <CalendarBodyWeekly
                            selectedDay={selectedDay}
                            hours={getUIHours()}
                            language={language}
                            hourHeight={60}
                            events={events}
                        />
                    ),
                }[mode]
            }

            <CalendarFooter
                language={language}
                mode={mode}
                onDayClick={() => setMode('MODE_DAYLY')}
                onWeekClick={() => setMode('MODE_WEEKLY')} />
        </View>
    )
}

const getDays = (selectedDay, events, language) => {

    const days = []

    let firstDay

    if (moment(selectedDay).day() === 0) {

        firstDay = moment(selectedDay).subtract(7, 'd').startOf('week').add(1, 'd')
    } else {

        firstDay = moment(selectedDay).startOf('week').add(1, 'd')
    }

    for (let i = 0; i < 7; i += 1) {

        const dia = firstDay.clone().add(i, 'd')

        days.push({
            moment: dia,
            name: language.shortDays[dia.format("e")].toUpperCase(),
            ymd: dia.format('YYYY-MM-DD'),
            number: dia.format("D"),
            hasEvents: hasEvents(dia, events)
        })
    }

    return days
}

const hasEvents = (day, events) => {

    return events.filter(event => moment.unix(event.startsAt).dayOfYear() === day.dayOfYear()).length ? true : false
}


const getUIHours = () => {

    const hours = []

    for (var i = 6; i <= 24; i += 1) {

        hours.push(i)
    }

    return hours
}


export default Calendar
