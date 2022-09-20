import React, { useState } from 'react'
import styles from './app.module.scss';
import Calendar from './components/calendarButton/calendar';
import Home from './components/calendarButton/home';
import DatePicker from './react-datepicker';
import { BrowserRouter, Routes, Route, NavLink, useSearchParams } from "react-router-dom";

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function CalendarPage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
  
}



export default App
