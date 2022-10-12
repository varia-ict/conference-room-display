import { useState } from 'react';
import React from 'react';
import Calendar from './components/calendar/Calendar';
import CalendarButton from './components/calendarButton/calendarButton';


const App = () => {

  const [buttonClick, setbuttonClick] = useState(false);


  return (
    <div>
      <div style={buttonClick ? { display: 'block' } : { display: 'none' }}>
        <Calendar props={{
          currentClass: {
            classNumber: '5353',
            classSubject: 'Programming',
            classTeacher: 'Teacher',
            classCode: 'MYTVPT64',
            classDate: '07/10/2022',
            classStartTime: '10:00',
            classEndTime: '11:30',
            classFree: false
          }
        }} />
      </div>

      <div onClick={() => setbuttonClick(!buttonClick)}>
        <CalendarButton />
      </div>

    </div>
  )
}

export default App

/*
function App() {

  return (
    <div>
      <Router>
      <CalendarButton />
        <Routes>
          <Route path='/calendarPage' element={<CalendarPage />} />
        </Routes>
          
      </Router>
    </div>
  )
}

export default App

/*
type AppProps = {

}

const App: React.FC<AppProps> = () => {
  const [toggle, setToggle] = React.useState<boolean>(false)

  return (
    <div className={styles.container}>
      {/*  <DemoComponent /> }
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <CalendarButton style={toggle ? {display: 'none'} : {display: 'block'}} />
    </div>
  )
}

export default App

 */
/*

props={{
            currentClass: {
              classNumber: '5353',
              classSubject: 'Programming',
              classTeacher: 'Teacher',
              classCode: 'MYTVPT64',
              classDate: '07/10/2022',
              classStartTime: '10:00',
              classEndTime: '11:30',
              classFree: false
            }
          }}



          */