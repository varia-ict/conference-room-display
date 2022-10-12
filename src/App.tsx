import React, { useState } from 'react'
import styles from './app.module.scss';
import Luokkanimi from './components/luokkanimi/luokkanimi';
import TimeDate from './components/timeDate/timeDate';
import Timeline from './components/timeLine/timeline';
import './app.scss';
import CalendarButton from './components/calendarButton/calendarButton';
import Calendar from './components/calendar/Calendar';
import { useModalContext } from '@rintsin/common-components'

const App: React.FC = () => {

  const { modal } = useModalContext()
  const displayModal = () => modal({
    content: (
      <div style={{height: '600px', width: '600px', position: 'relative'}}>
        <Calendar props={{
          currentClass: {
            classNumber: '5353',
            classSubject: 'Programming',
            classTeacher: 'Teacher',
            classCode: 'MYTVPT64',
            classDate: '07/10/2022',
            classStartTime: '10:00',
            classEndTime: '11:30',
            classFree: false
          }
        }} />
      </div>
    )
  })
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>

        <div className={styles.left}>
          <div className={styles.top}>
            <TimeDate />
          </div>
          <div className={styles.bottom}>
            <Luokkanimi luokanNimi='Luokka 123' />
            <div onClick={displayModal}>
              <CalendarButton />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default App
