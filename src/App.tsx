import React from 'react'

import styles from './app.module.scss';
//import DateTime from './components/dateTime/dateTime';

import RoomComponent from './components/huoneNo/roomNo';
import Timeline from './components/Reservation/reservation';
import RoomStatus from './components/roomStatus/roomStatus';
import DateTime from './components/timeDate/timeDate';

const App: React.FC = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.left}>
          <div className={styles.top}>
            <DateTime />
          </div>
          <div className={styles.bottom}>
            <RoomComponent />
          </div>
        </div>
        <div className={styles.right}>
          <Timeline />
        </div>
      </div>
      <RoomStatus />
    </div>
  )
}


export default App
