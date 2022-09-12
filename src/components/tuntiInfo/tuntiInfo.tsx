import React from 'react'
import styles from './tuntiInfo.module.scss'

type TuntiInfoProps = {
    infoText: string
    onVapaa?: boolean
}

const TuntiInfo: React.FC<TuntiInfoProps> = ({infoText, onVapaa=false}) => {
  return (
    <div className={`${styles.container} ${onVapaa ? styles.isGreen : styles.isRed}`}>
        {
            infoText
        }
    </div>
  )
}

export default TuntiInfo
