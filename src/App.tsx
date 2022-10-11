import React from 'react'
import styles from './app.module.scss';
import Luokkanimi from './components/luokkanimi/luokkanimi';
import Timeline from './components/timeLine/timeline';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <Luokkanimi luokanNimi='Luokka 123'/>
          </div>
        </div>
        <div className={styles.right}>
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default App
