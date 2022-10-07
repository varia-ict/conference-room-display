import React from 'react'
import  styles from "./timeDate.module.scss";
import {useState} from 'react';

type TimeProps = {

}

const Time: React.FC<TimeProps> = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    
    setInterval(UpdateTime, 1000)
    return (
        <div >
        <h1 className={styles.ime}> {ctime} </h1>
        
        </div>
    );
};
export default Time;