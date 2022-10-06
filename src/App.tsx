import React from 'react'
import styles from './app.module.scss';
import TuntiInfo from './components/tuntiInfo/tuntiInfo';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <TuntiInfo infoText='example text example text example text example text example text'/>
    </div>
  )
}

export default App
