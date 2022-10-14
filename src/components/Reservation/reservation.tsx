import { time } from 'console';
import React, { CSSProperties, useEffect, useState } from 'react'
import { isBooleanObject } from 'util/types';
import DateTime from '../timeDate/timeDate';
import styles from './reservation.module.scss'

type TimelineProps = {
}

export interface IReservation {
  id: number;
  name: string;
  summary: string;
  startTime: number;
  endTime: number;
}

const reservations: IReservation[] = [
  {
    id: 1,
    name: '',
    summary: 'class 1',
    startTime: 1665747120000,
    endTime: 1665747180000
  },
  {
    id: 2,
    name: '',
    summary: 'class 2',
    startTime: 1665747120000,
    endTime: 1665747180000
  },
  {
    id: 3,
    name: '',
    summary: 'class 3',
    startTime: 1665747120000,
    endTime: 1665747180000
  },
  {
    id: 4,
    name: '',
    summary: 'class 4',
    startTime: 1665747120000,
    endTime: 1665747180000
  },
  {
    id: 5,
    name: '',
    summary: 'class 5',
    startTime: 1665747120000,
    endTime: 1665747180000
  },
  {
    id: 6,
    name: '',
    summary: 'class 6',
    startTime: 1665747120000,
    endTime: 1665747180000
  }

]

const Timeline: React.FC<TimelineProps> = (startTime, endTime) => {
  var [date,setDate] = useState(new Date().getTime());

  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date().getTime()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  });
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.items}>
        {
          reservations.filter(r => new Date(r.startTime).toLocaleDateString() === new Date(date).toLocaleDateString()).map(r => {
            return (
              <div
                key={r.id}
                className={styles.item}
              >
                <div className={styles.ball}></div>
                <div className={styles.info + ' ' +getColor(date, r.startTime, r.endTime)}>
                  <div>{msToTime(r.startTime) +' - ' + msToTime(r.endTime)}</div>
                  <div>{r.summary}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
//functions
const msToTime = (millisecond: number): string => new Date(millisecond).toLocaleTimeString('fi-FI', {hour: '2-digit', minute: '2-digit'})

const getColor = (date: number, startDate: number, endDate: number): string => {
  if(startDate > date) return styles.next
  if(endDate < date) return styles.old
  return styles.now
}

export default Timeline