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
// const themes = {
//   light: {
//     background: "#eeeeee"
//   },
//   dark: {
//     background: "#222222"
//   }
// };

// export const DataContext = createContext(themes.light);
// const DataProvider = DataContext.Provider;
// const DataConsumer = DataContext.Consumer
// const ColorProvider = ColorContext.Provider
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
  const {theme, changeTheme} = React.useContext(ThemeCotext) as ThemeContextType;
  const handlerThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  }
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select name="toggleTheme" onChange={handlerThemeChange} id="">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
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
