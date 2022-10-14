import React from 'react'
import styles from './vapaaIndikaattori.module.scss'

type VapaaIndikaattoriProps = {
  onVapaa: boolean;
}

const VapaaIndikaattori: React.FC<VapaaIndikaattoriProps> = ({ onVapaa }) => {
  return (
    <div style={{background: onVapaa ? "green" : "red" }} className={styles.container}>
      {
        onVapaa
          ? "Käytössä"
          : "Ei käytössä"
      }
    </div>
  )
}

export default VapaaIndikaattori
