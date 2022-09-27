import React from 'react'
//import styles from './app.module.scss';
import Home from './components/calendarButton/home';


import { 
  BrowserRouter as Router,
  Routes,
  Route,
  //NavLink, 
  //useSearchParams
} from "react-router-dom";

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}





export default App
function useState(arg0: Date): [any, any] {
  throw new Error('Function not implemented.');
}


