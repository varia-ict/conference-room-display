import CalendarButton from './calendarButton';
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import React, { useEffect, useRef, useState } from 'react'

type HomeProps = {

}


const Home: React.FC<HomeProps> = () => {
    const [startDate, setStartDate] = useState(new Date());
    const calendarRef = useRef<any>(null)

    useEffect(() => {
        if (!calendarRef.current) return;

        const ref = calendarRef.current as HTMLDivElement;

        ref.innerHTML = ''
        

    })

    return (
        <div >
            <DatePicker
                ref={calendarRef}
                selected={startDate}
                onChange={(date:Date) => setStartDate(date)}
                customInput={<CalendarButton endDate='' startDate='' />}
            />
            {/* <CalendarButton startDate='2022-09-19' endDate='2022-09-23'></CalendarButton>
            <CalendarButton startDate='2022-09-13' endDate='2023-09-23'></CalendarButton> */}
        </div>
    )
}

export default Home