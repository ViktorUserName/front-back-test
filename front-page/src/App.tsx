import React, { createContext, useState } from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Sell from './pages/Sell/Sell';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import img from './assets/moon.svg';
import img2 from './assets/moon.svg';
import ThemeProvider from './providers/themeProvider/ColorProvider';
import ProviderWrapper from './providers/themeProvider/ProviderWrapper';


function App() {

  return (
    <div className="App">
      <Header/>
          <ThemeProvider>
            <ProviderWrapper>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/cards' element={<Sell/>}/>
            </Routes>
                <div className="testContent">test</div>
            </ProviderWrapper>
          </ThemeProvider>
    </div>
  );
}

export default App;
