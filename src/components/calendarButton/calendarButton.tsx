import styles from './calendarButton.module.scss';
import CalendarIcon from './calendar-icon.png';
import { useNavigate } from "react-router-dom";


type CalendarButtonProps = {
  startDate: string,
  endDate: string
}

//component recieves a start and end date and redirect to calendar component
export function CalendarButton({ startDate, endDate }: CalendarButtonProps) {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate("/calendar?startDate=" + startDate + "&endDate="+endDate)}>

      <img className={styles.img}
        src={CalendarIcon}
        alt='calendar' />
    </button>
  )
}





export default CalendarButton

