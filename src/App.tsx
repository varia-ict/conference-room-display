import React from 'react'
import styles from './app.module.scss';
import Luokkanimi from './components/luokkanimi/luokkanimi';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <Luokkanimi luokanNimi='Luokka 123'/>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default App
