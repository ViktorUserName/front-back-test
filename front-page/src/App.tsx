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


type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const ThemeCotext = createContext<ThemeContextType | null>(null)
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [themeMode, setThemeMode] = useState<Theme>('light');
  return (
    <ThemeCotext.Provider value={{theme: themeMode, changeTheme: setThemeMode}}>
      {children}
    </ThemeCotext.Provider>
  )
}

const ThemeWrapper:React.FC<{children: React.ReactNode}> = ({children}) => {
  const [valueState, setvalueState] = useState('white')
  const handlerValue = () => {
    if(valueState === 'white'){
      setvalueState('dark')
    } else if (valueState === 'dark'){
      setvalueState('white')
    }
  }


  const {theme, changeTheme} = React.useContext(ThemeCotext) as ThemeContextType;
  const handlerThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.value as Theme);
  }
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      {/* <select name="toggleTheme" onChange={handlerThemeChange} id="">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
      <input className="checkbox" type="checkbox" id="reg-log" onChange={handlerThemeChange} value={valueState} name="reg-log"/>
      <label className='tea' htmlFor="reg-log" onClick={handlerValue}></label>
      {children}
    </div>
  )
}
function App() {

  return (
    <div className="App">
      <Header/>
          {/* <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/cards' element={<Sell/>}/>
          </Routes> */}
          <ThemeProvider>
            <ThemeWrapper>
              <div className="testContent">test</div>
            </ThemeWrapper>
          </ThemeProvider>
    </div>
  );
}

export default App;
