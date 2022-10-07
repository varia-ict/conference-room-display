import React from 'react'
import styles from './app.module.scss';
import RoomStatus from './components/roomStatus/roomStatus';
import Time from './components/timeDate/timeDate';




const App: React.FC = () => {
  return (
    <div className={styles.container}>
    
      <div className={styles.background}>
      </div>
      <div className={styles.content}>
     
        <div className={styles.left}>
        <Time />
          <div className={styles.top}></div>
          <div className={styles.bottom}>
          
          </div>
         
        </div>
        <div className={styles.right}></div>
      </div>
      <RoomStatus />
    </div>
  )
}

export default App
