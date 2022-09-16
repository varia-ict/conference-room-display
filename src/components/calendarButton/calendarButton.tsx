import React from 'react';
import styles from './calendarButton.module.scss';
import CalendarIcon from './calendar-icon.png';

type CalendarButtonProps = {

}

const CalendarButton: React.FC<CalendarButtonProps> = () => {
  return (
    <div 
    className={styles.button} 
    /*onClick={this.openCalendar}*/>
      <img
        className={styles.img}
        src={CalendarIcon}
        alt='calendar' />
    </div>
  )
}




export default CalendarButton
