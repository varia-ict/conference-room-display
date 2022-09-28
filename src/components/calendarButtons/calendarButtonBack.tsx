import React from 'react'
import styles from './calendarButtonBack.module.scss';

type CalendarButtonBackProps = {

}

const CalendarButtonBack: React.FC<CalendarButtonBackProps> = () => {
  return (
    <div>
      <a href='https://www.google.com/' target="_blank">
      <button className={styles.button}>
            Edellinen
        </button>
        </a>
    </div>
  )
}

export default CalendarButtonBack