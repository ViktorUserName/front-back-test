import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  Route,
  Routes
} from "react-router-dom";
import Sell from './pages/Sell/Sell';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/cards' element={<Sell/>}/>
      </Routes>
    </div>
  );
}

export default App;
