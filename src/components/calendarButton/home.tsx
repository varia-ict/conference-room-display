import CalendarButton from './calendarButton';
import React, { useState } from 'react'
import styles from './home.module.scss';

type HomeProps = {

}


const Home: React.FC<HomeProps> = () => {
    const [date, setDate] = useState(new Date());
    const [displayCalendar, setDisplayCalendar] = useState(false);

    return (
        <div>
            <div className={displayCalendar ? styles.on : ""} id={styles.overlay} onClick={() => setDisplayCalendar(!displayCalendar)}>
                {date.toLocaleDateString()} Moha's calendar component
            </div>
            <div>{displayCalendar?'true': 'false'}</div>
            <div >
                <CalendarButton onClick={() => setDisplayCalendar(!displayCalendar)} />
            </div>
        </div>
    )
}

export default Home


