import React from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Sell from './pages/Sell/Sell';
import Header from './components/Header/Header';

// const ThemeContext = React.createContext('light')


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <ThemeContext.Provider value='dark'> */}
        <Route path='/cards' element={<Sell/>}/>
        {/* </ThemeContext.Provider> */}
      </Routes>
    </div>
  );
}

export default App;
