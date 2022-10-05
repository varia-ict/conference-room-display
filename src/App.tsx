import React from 'react'
import styles from './app.module.scss';
import Timeline from './components/Reservation/reservation';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      </div>
      <div className={styles.content} id='1'>
        <div className={styles.left} id='2'>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <Timeline />
            </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default App
