import { time } from 'console'
import React from 'react'
import styles from './tuntiInfo.module.scss'

type TuntiInfoProps = {
  infoText?: string
  startTime?: number
  endTime?: number
}

const TuntiInfo: React.FC<TuntiInfoProps> = ({ infoText, startTime, endTime }) => {
  const onVapaa = startTime === undefined && endTime === undefined
  return (
    <div className={`${styles.container} ${onVapaa ? styles.isGreen : styles.isRed}`}>
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

export default TuntiInfo
