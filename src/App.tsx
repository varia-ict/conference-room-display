import React from 'react'
import styles from './app.module.scss';
import CalendarButtonBack from './components/calendarButtons/calendarButtonBack';
import CalendarButtonForward from './components/calendarButtons/calendarButtonForward';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div><CalendarButtonBack/></div>
      <div><CalendarButtonForward/></div>
      <div className={styles.background}>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default App
