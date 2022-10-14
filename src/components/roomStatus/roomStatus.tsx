import React from 'react'
import  styles from "./roomStatus.module.scss";
import {useState} from 'react';


type RoomStatusProps = {

}

const RoomStatus: React.FC<RoomStatusProps> = () => {
  const [state, setState] = useState(false);
  const toggle=()=>{
    setState(!state);
  }
  return (
    
    
    <div style={{zIndex: 500}}>
      <div className={state ? styles.toggleOpen : styles.toggleClose} onClick={toggle}  >
      {state ? "Käytössä" : "Ei käytössä"}
       
       </div>
    </div>
    
    
  )
}

export default RoomStatus
