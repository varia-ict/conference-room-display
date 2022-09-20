import React from 'react'

type CalendarProps = {
    startDate: string,
    endDate: string
}

const Calendar: React.FC<CalendarProps> = ({ endDate, startDate }) => {
    return (
        <div>
            <h1>Start Date {startDate}</h1>
            <h1>End Date {endDate}</h1>
        </div>
    )
}

export default Calendar
