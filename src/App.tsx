import React from 'react'
import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.left}>
        <div className={styles.top}>
        </div>
        <div className={styles.bottom}>
        </div>
      </div>
      <div className={styles.right}>
      </div>
    </div>
  )
}

export default App
