import React from "react"
import Reservation from './components/Reservation/reservation';
import styles from './app.module.scss';


type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <>
     <Reservation time="10.00-12.00" status={true} /> 
    </>
  )
}

export default App
