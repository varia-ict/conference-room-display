import { time } from 'console';
import React, { CSSProperties } from 'react'
import styles from './reservation.module.scss'

type TimelineProps = {
}

export interface IReservation {
  id: number;
  name: string;
  startTime?: number;
  endTime?: number;
}

const reservations: IReservation[] = [
  {
    id: 1,
    name: 'opetus',
    startTime: 1664266619370,
    endTime: 1664266629370
  },
  {
    id: 2,
    name: ''
  },
  {
    id: 3,
    name: ''
  }
]

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.items}>
        {
          reservations.map(x => {
            const free = !x.startTime && !x.endTime;
            return (
              <div
                key={x.id}
                className={styles.item}
                style={
                  {
                    '--ball-color': free ? '#3FF057' : '#EC1C1C',
                    '--info-color': free ?'#3FF057' : '#EC1C1C',
                  } as CSSProperties}
              >
                <div className={styles.ball}></div>
                <div className={styles.info}>
                  {/* {} need to add time var */}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Timeline
