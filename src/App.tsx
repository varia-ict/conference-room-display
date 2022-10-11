import React from 'react'
import styles from './app.module.scss';
import Calendar from './components/Calendar/Calendar';
import CalendarButton from './components/calendarButton/calendarButton';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <Calendar />
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}





export default App
