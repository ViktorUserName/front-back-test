import React, {useContext, useState} from 'react';
import { Theme, ThemeContextType } from './theme';
import { ThemeCotext } from './ColorProvider';

const ProviderWrapper:React.FC<{children: React.ReactNode}> = ({children}) => {
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

export default ProviderWrapper;