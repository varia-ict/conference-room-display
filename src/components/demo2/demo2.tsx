import React, { useEffect, useState } from 'react'
import styles from './demo2.module.scss';

type Demo2Props = {

}

const Demo2: React.FC<Demo2Props> = () => {
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    console.log('ASD')
  }, [clickCounter])

  return (
    <div className={styles.container}>
      Demo2
      <button onClick={() => setClickCounter(clickCounter + 1)}>Click</button>
      <p>You clikc the button {clickCounter} times</p>
    </div>
  )
}

export default Demo2
