import React from 'react'
import DemoComponent from './components/demoComponent/demoComponent'
import styles from './app.module.scss';
import Demo2 from './components/demo2/demo2';

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <DemoComponent />
      <Demo2 />
    </div>
  )
}

export default App
