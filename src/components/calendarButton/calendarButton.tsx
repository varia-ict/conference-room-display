import styles from './calendarButton.module.scss';
import CalendarIcon from './calendar-icon.png';


type CalendarButtonProps = {
  // pageName: translations
  onClick?: () => void
}
// interface translations {
//   english: string
//   finnish: string
// }



//component recieves a start and end date and redirect to calendar component
export function CalendarButton({ onClick }: CalendarButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>

      <img className={styles.img}
        src={CalendarIcon}
        alt='calendar' />
    </button>
  )
}





export default CalendarButton

