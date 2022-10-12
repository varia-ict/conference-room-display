import { CSSProperties, useState } from 'react';
import styles from './calendar.module.scss';

export interface CalendarInterface {
  currentClass: {
    classNumber: string;
    classSubject: string;
    classTeacher: string;
    classCode: string;
    classDate: string;
    classStartTime: string;
    classEndTime: string;
    classFree: boolean;
  };
}

export interface CalendarProps {

  props: CalendarInterface;
}

export const Calendar: React.FC<CalendarProps> = ({ props }) => {

  //{c.classNumber + c.classSubject + c.classTeacher + c.classCode + c.classDate + c.classStartTime + c.classEndTime + c.classFree}
  /*
    const allClasses = classInfo.map((c, i) =>
  
      <li key={i} className={styles.slot + ' ' + styles.slot1}>
        {c.classNumber + c.classSubject + c.classTeacher + c.classCode + c.classDate + c.classStartTime + c.classEndTime + c.classFree}
      </li>
  
      );
  */

  //const currentDate = Date();

  const [gridRow, setGridRow] = useState(17);
  const [gridColumn, setGridColumn] = useState(0);
  const [gridHeight, setGridHeight] = useState(80);

  function setEventPosition() {

    setGridColumn(3);

  }

  function printCurrentEvent() {

    const currentClassData = [
      props.currentClass.classStartTime + '-' + props.currentClass.classEndTime,
      props.currentClass.classDate,
      'Luokka ' + props.currentClass.classNumber,
      props.currentClass.classSubject,
      props.currentClass.classTeacher
    ];

    const eventStyle: CSSProperties = {
      gridRow: gridRow,
      gridColumn: gridColumn,
      height: gridHeight
    };
    
    return (
      <li className={styles.slot + ' ' + styles.slot1} style={eventStyle}>
        {currentClassData.map(c => c + '\n')}
      </li>
    )
  }

  function printAllEvents() {

    
    return (
      printCurrentEvent()
    )

  }



  
  /*
    const printEvent = (
      <li className={styles.slot + ' ' + styles.slot1} style={eventStyle}>
        {printCurrentEvent()}
      </li>
    )
  */

  const calendar = (

    <div className={styles.container}>
      <div className={styles.calendar_container}>

        <div className={styles.header}>

          <ul className={styles.weekdays}>
            <li>Maanantai</li>
            <li>Tiistai</li>
            <li>Keskiviikko</li>
            <li>Torstai</li>
            <li>Perjantai</li>
            <li>Lauantai</li>
            <li>Sunnuntai</li>
          </ul>

          <ul className={styles.daynumbers}>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
          </ul>
        </div>

        <div className={styles.timeslots_container}>
          <ul className={styles.timeslots}>
            <li>8:00</li>
            <li>9:00</li>
            <li>10:00</li>
            <li>11:00</li>
            <li>12:00</li>
            <li>13:00</li>
            <li>14:00</li>
            <li>15:00</li>
            <li>16:00</li>
          </ul>
        </div>

        <div className={styles.event_container}>
          {printAllEvents()}
        </div>

      </div>
    </div>
  );

  console.log();
  return <div>{calendar}</div>;

}

export default Calendar;