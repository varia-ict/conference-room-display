import React from 'react'
import styles from './luokkanimi.module.scss'

type LuokkanimiProps = {
    luokanNimi: string
}

const Luokkanimi: React.FC<LuokkanimiProps> = ({ luokanNimi }) => {
  return (
    <div className={styles.container}>
      {luokanNimi}
    </div>
  )
}

export default Luokkanimi
