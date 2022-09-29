import { useState } from 'react';
import styles from './style.module.scss'

function TimeDate(): JSX.Element {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  let date = dateTime.toLocaleDateString();
  //ctime= currenttime-setCtime=updatetimes
  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(date);

  const UpdateTime = () => {

    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    let date = dateTime.toLocaleDateString();
    setCtime(time);
    setCdate(date);
  };

  setInterval(UpdateTime, 1000);
  return (
    <div className={styles.container}>
      <h1> {ctime} </h1>
      <h1> {cdate} </h1>   
    </div>
  );
};

export default TimeDate;