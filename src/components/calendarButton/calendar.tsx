type CalendarProps = {
    startDate: string,
    endDate: string
}

export function Calendar({ startDate, endDate }: CalendarProps) {
    return (
        <div>
            <h1>Start Date {startDate}</h1>
            <h1>End Date {endDate}</h1>
        </div>

    )
}

export default Calendar