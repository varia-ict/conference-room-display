import CalendarButton from './calendarButton';
import React, { useState } from 'react'
import styles from './calendarScreen.module.scss';
import Modal from 'react-modal';


type HomeProps = {

}
//when the calendarButton is pushed calendarScreen is open
const CalendarScreen: React.FC<HomeProps> = () => {
    const [date] = useState(new Date());
    const [displayCalendar, setDisplayCalendar] = useState(false);

    
    const [IsOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <div className={displayCalendar ? styles.on : ""} id={styles.overlay} /*onClick={() => setDisplayCalendar(!displayCalendar)}*/>

                <Modal
                    isOpen={IsOpen}
                    onRequestClose={() => setIsOpen(!IsOpen)}
                    contentLabel="Example Modal"
                >
                    <div className={styles.modal}> {date.toLocaleDateString()} Moha's calendar component</div>
                   
                </Modal>
            </div>
            {/* <div>{displayCalendar ? 'true' : 'false'}</div> */}
            <div >
                <CalendarButton onClick={() => setIsOpen(true)} />
            </div>
        </div>
    )
}

export default CalendarScreen


