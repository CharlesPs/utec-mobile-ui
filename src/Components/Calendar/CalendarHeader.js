
import React from 'react'
import {
    View,
    Text,
} from 'react-native'

import CalendarHeaderButton from './CalendarHeaderButton'

import styles from './CalendarHeader.styles'

import moment from 'moment'

const CalendarHeader = (props) => {

    const {
        language,
        mode,
        days,
        weekTitle,
        selectedDay,
        onSelectDay,
    } = props

    let selectedString = 'No default language'

    let nomMonth = language.months[moment(selectedDay, 'YYYY-MM-DD').format('M') - 1]

    if (mode === 'MODE_DAYLY') {

        const nomDay = language.days[moment(selectedDay, 'YYYY-MM-DD').format('e')]
        const numDay = moment(selectedDay, 'YYYY-MM-DD').format('D')

        if (language.code == 'es') {

            selectedString = weekTitle !== "The weeks are not yet defined" ? `${weekTitle} | ${nomDay.toLowerCase()}, ${numDay} de ${nomMonth.toLowerCase()}` : `${nomDay.toLowerCase()}, ${numDay} de ${nomMonth.toLowerCase()}`
        } else if (language.code == 'en') {

            selectedString = weekTitle !== "The weeks are not yet defined" ? `${weekTitle} | ${nomDay}, ${nomMonth} ${numDay}` : `${nomDay}, ${nomMonth} ${numDay}`
        }
    } else {

        const dayFrom = days[0]
        const dayTo = days[days.length - 1]

        const nomDayFrom = language.days[dayFrom.moment.format('e')]
        const numDayFrom = dayFrom.moment.format('D')

        const nomDayTo = language.days[dayTo.moment.format('e')]
        const numDayTo = dayTo.moment.format('D')

        if (language.code === 'es') {

            selectedString = weekTitle !== "The weeks are not yet defined" ? `${weekTitle} | ${nomDayFrom.toLowerCase()} ${numDayFrom} a ${nomDayTo.toLowerCase()} ${numDayTo} de ${nomMonth.toLowerCase()}` : `${nomDayFrom.toLowerCase()} ${numDayFrom} a ${nomDayTo.toLowerCase()} ${numDayTo} de ${nomMonth.toLowerCase()}`
        } else if (language.code == 'en') {

            selectedString = weekTitle !== "The weeks are not yet defined" ? `${weekTitle} | ${nomDayFrom}, ${nomMonth} ${numDayFrom} \n to ${nomDayTo}, ${nomMonth} ${numDayTo}` : `${nomDayFrom}, ${nomMonth} ${numDayFrom} \n to ${nomDayTo}, ${nomMonth} ${numDayTo}`
        }
    }

    return (
        <View style={[
            styles.header,
            // {height: 400}
        ]}>
            <View 
                style={
                    [
                        styles.btnsContainer,
                        // {height: 100}
                    ]
                }
            >
                {days.map((day, i) => (
                    <CalendarHeaderButton 
                        key={i} 
                        index={i} 
                        day={day} 
                        days={days} 
                        selectedDay={selectedDay} 
                        onSelectDay={onSelectDay}
                    />
                ))}
            </View>
            <View style={styles.selectedStringContainer}>
                <Text style={styles.selectedStringInfo}>
                    {selectedString}
                </Text>
            </View>
        </View>
    )
}

export default CalendarHeader
