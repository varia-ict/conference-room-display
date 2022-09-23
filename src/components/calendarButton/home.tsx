import CalendarButton from './calendarButton';
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import React, { useEffect, useRef, useState } from 'react'

type HomeProps = {

}


const Home: React.FC<HomeProps> = () => {
    const [date, setDate] = useState(new Date());
    const [displayCalendar, setDisplayCalendar] = useState(false);

    return (
        <div>
            <div style={{ color: 'black', width: '50px', height: '50px', display: displayCalendar ? "block" : "" }}>
                {date.toLocaleDateString()}
            </div>
            <div >
                <CalendarButton onClick={() => setDisplayCalendar(!displayCalendar)} />
            </div>
        </div>
    )
}

export default Home


