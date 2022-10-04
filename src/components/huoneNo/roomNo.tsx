import React from 'react'
import styles from './roomNo.module.scss';

type RoomComponentProps = {

}

const RoomComponent: React.FC<RoomComponentProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Luokka 216</div>
      
    </div>
  )
}

export default RoomComponent