import React from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Sell from './pages/Sell/Sell';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

import dataJson from './providerData/data.json'
import { DataProvider } from './providerData/providerFirst';



function App() {
  const {enter : data} = dataJson;
  return (
    <div className="App">
      <Header/>
        <DataProvider value={data}>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/cards' element={<Sell/>}/>
          </Routes>
        </DataProvider>
    </div>
  );
}

export default App;
