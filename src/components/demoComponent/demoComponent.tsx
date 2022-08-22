import React from 'react'
import styles from './demoComponent.module.scss';

type DemoComponentProps = {

}

const DemoComponent: React.FC<DemoComponentProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>1</div>
      <div className={styles.item}>2</div>
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
    </div>
  )
}

export default DemoComponent
