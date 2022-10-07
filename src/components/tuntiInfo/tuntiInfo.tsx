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
          ? (
            <div>{new Date(startTime).toLocaleTimeString().replace(/.\d+Z$/g, "Z")} - {new Date(endTime).toLocaleTimeString()}</div>
          )
          : null
      }
      <div className={styles.infotext}>
        <p>{startTime} - {endTime}</p>
        <p>{infoText}</p>
      </div>
    </div>
  )
}

export default TuntiInfo
