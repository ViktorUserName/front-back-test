import React, { createContext, useState } from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Sell from './pages/Sell/Sell';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

// import dataJson from './providerData/data.json'
// import { DataProvider } from './providerData/providerFirst';
const themes = {
  light: {
    background: "#eeeeee"
  },
  dark: {
    background: "#222222"
  }
};

// export const DataContext = createContext(themes.light);
// const DataProvider = DataContext.Provider;
// const DataConsumer = DataContext.Consumer
export const ColorContext = createContext({});
const ColorProvider = ColorContext.Provider



function App() {
  // let [colorContext, setColorContext] = useState(themes.light);
  // let changeHandler = () => {
  //   setColorContext(colorContext => colorContext=themes.dark)
  // }

  return (
    <div className="App">
      <Header/>
        <ColorProvider value={themes}>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/cards' element={<Sell/>}/>
          </Routes>
        </ColorProvider>
    </div>
  );
}

export default App;
