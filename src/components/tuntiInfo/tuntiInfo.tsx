import { time } from 'console'
import React, { useEffect, useState } from 'react'
import styles from './tuntiInfo.module.scss'

type TuntiInfoProps = {
  infoText?: string
  startTime: number
  endTime: number
}

const TuntiInfo: React.FC<TuntiInfoProps> = ({ infoText, startTime, endTime }) => {
  var [date, setDate] = useState(new Date().getTime());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date().getTime()), 1000)
    return function cleanup() { clearInterval(timer) }
  });
  
  return (
    <div className={`${styles.container} ${getColor(date, startTime, endTime)}`}>
      {
        startTime && endTime 
          ? <div>
              {new Date(startTime).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} - {new Date(endTime).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
            </div>
          : null
      }
      <div className={styles.infotext}>
        <p>{infoText}</p>
      </div>
    </div>
  )
}

// FUNCTIONS

const msToTime = (millisecond: number): string => new Date(millisecond).toLocaleTimeString('fi-FI', {hour: '2-digit', minute: '2-digit'})

const getColor = (date: number, startDate: number, endDate: number): string => {
  if(startDate > date) return styles.upcoming
  if(endDate < date) return styles.old
  return styles.now
}

export default TuntiInfo
