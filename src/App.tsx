import React from 'react'
import styles from './app.module.scss';
import background from './images/varialogo.png'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={background}/>
      </div>
      <div className={styles.content}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </div>
  )
}

export default App
