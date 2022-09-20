import React from 'react'
import styles from './app.module.scss';
import Calendar from './components/calendarButton/calendar';
import Home from './components/calendarButton/home';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink, 
  useSearchParams
} from "react-router-dom";

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/calendar" element={<CalendarPage />} /> */}
      </Routes>
    </Router>
  );
}

// function CalendarPage() {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
//   );
// }



export default App
function useState(arg0: Date): [any, any] {
  throw new Error('Function not implemented.');
}
