import React from 'react'
import styles from './app.module.scss';
import CalendarButton from './components/calendarButton/calendarButton';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.btn}>
      <div/>
      <CalendarButton startDate='2022-09-19' endDate='2022-09-23'></CalendarButton>
    </div>
  )
}

export default App
