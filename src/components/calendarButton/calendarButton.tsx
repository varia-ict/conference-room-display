import { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import styles from './calendarButton.module.scss';


function CalendarButton() {

  //icons
  const icon1 = <FaRegCalendarAlt size={60} />;
  const icon2 = <AiOutlineHome size={60} />;

  const [icon, setIcon] = useState(icon1);

  function ChangeIcon() {

    buttonClick ? setIcon(icon1) : setIcon(icon2);

  };
  //


  // Button
  const [buttonClick, setbuttonClick] = useState(false);

  function HandleButtonClick() {

    setbuttonClick(!buttonClick);
    ChangeIcon();

  };
  //

  return (
    <div>
      <button
        className={styles.calendarButton}
        onClick={HandleButtonClick}>
        {icon}
      </button>
    </div >
  );
}

export default CalendarButton;


/*
type CalendarButtonProps = {
  style?: React.CSSProperties | undefined
}

const CalendarButton: React.FC<CalendarButtonProps> = ({ style }) => {
  return (
    <div className={styles.container} style={style}>
      <button>
        <GiBearFace />
      </button>
        <GiBirdTwitter />
    </div>
  )
}

export default CalendarButton
*/