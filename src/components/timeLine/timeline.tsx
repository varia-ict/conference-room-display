import React, { CSSProperties } from 'react'
import styles from './timeline.module.scss'

type TimelineProps = {
  customStyle?: string;
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

const Timeline: React.FC<TimelineProps> = (customStyle) => {
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
                    '--ball-color': free ? '#00FF00' : '#FF0000',
                    '--info-color': free ? '#90EE90' : '#f54242',
                  } as CSSProperties}
              >
                <div className={styles.ball}></div>
                <div className={styles.info}>
                  {
                    free ? 'FREE' : 'NOT FREE'
                  }
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