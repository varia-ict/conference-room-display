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
            <div>{new Date(startTime).toLocaleTimeString()} - {new Date(endTime).toLocaleTimeString()}</div>
          )
          : null
      }
      <div>{infoText}</div>
    </div>
  )
}

export default TuntiInfo
