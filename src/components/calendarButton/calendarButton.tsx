 import React from 'react';
 import styles from './calendarButton.module.scss';
 import CalendarIcon from './calendar-icon.png';

 type CalendarButtonProps = {
 startDate: string,
 endDate: string
 }

//  const CalendarButton: React.FC = () => {
//   return (
//      <button 
//      className={styles.btn}>
//        <img
//          className={styles.img}
//          src={CalendarIcon}
//          alt='calendar' />
//      </button>
//    )
// }

function handleClick(startDate: string, endDate: string): Boolean {
  alert("Redirect to calendar startDate:" + startDate + " end date: " + endDate)
  return true
}

//component recieves a start and end date and redirect to calendar component
export function CalendarButton ({startDate, endDate}: CalendarButtonProps) {
  
  return (
    <button className={styles.btn} onClick = {() => handleClick(startDate, endDate)}>

      <img className={styles.img}
      src={CalendarIcon}
      alt='calendar' />
    </button>
  )
}
 




export default CalendarButton

