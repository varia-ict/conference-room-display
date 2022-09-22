import React from 'react'
import DemoComponent from './components/demoComponent/demoComponent'
import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    // <DemoComponent/>
    <div className={styles.container}>
      <div className={styles.background}>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default App
