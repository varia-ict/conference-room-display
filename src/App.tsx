import React from 'react'
import styles from './app.module.scss';
import CalendarButton from './components/calendarButton/calendarButton';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.button}>
      <CalendarButton />
    </div>
  )
}

export default App
