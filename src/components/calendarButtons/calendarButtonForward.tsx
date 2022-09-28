import React from 'react'
import styles from './calendarButtonForward.module.scss';

type CalendarButtonForwardProps = {

}

const CalendarButtonForward: React.FC<CalendarButtonForwardProps> = () => {
    return (
        <div>
          <a href='https://www.google.com/' target="_blank">
          <button className={styles.button}>
                Seuraava
            </button>
            </a>
        </div>
      )
}

export default CalendarButtonForward