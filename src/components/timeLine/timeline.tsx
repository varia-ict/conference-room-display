import React, { CSSProperties } from 'react'
import TuntiInfo from '../tuntiInfo/tuntiInfo';
import styles from './timeline.module.scss'

export interface IReservation {
  id: number;
  infoText: string;
  startTime: number;
  endTime: number;
}

const reservations: IReservation[] = [
  {
    id: 1,
    infoText: ' Luokkatunnus Opettajan nimi asdasdaasdasadsa adsasd',
    startTime: 1665443416508,
    endTime: 1665743416508

  },
  {
    id: 2,
    infoText: 'asd Luokkatunnus Opettajan nimi asdasdaasdasadsa adsasd',
    startTime: 1665743416508,
    endTime: 1665751916508
  },
  {
    id: 3,
    infoText: 'asd Luokkatunnus Opettajan nimi asdasdaasdasadsa adsasd',
    startTime: 1665751916508,
    endTime: 1665756916508
  },
]

type TimelineProps = {
  Ireservations: IReservation[]
}
const Timeline: React.FC<TimelineProps> = ({Ireservations = reservations}) => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.items}>
        {
          reservations.map(x => {
            // const free = !x.startTime && !x.endTime;
            return (
              <div
                key={x.id}
                className={styles.item}
                // style={
                  // {
                  //   '--ball-color': free ? '#00b6ff' : '#00b6ff',
                  //   '--info-color': free ? '#90EE90' : '#f54242',
                  // } as CSSProperties}
              >
                <div className={styles.ball}></div>
                <div className={styles.info}>
                  <TuntiInfo startTime={x.startTime} endTime={x.endTime} infoText={x.infoText} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Timeline