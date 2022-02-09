import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

const Layout: React.FC = ({children}) => {

  return (
    <div className='layout' >
        <div className='top-navigation'>
        <ThemeIcon />        
      </div>
      {children}
    </div>
    
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()

  const handleTheme = () => setDarkTheme(!darkTheme)

  return (
    <span onClick={handleTheme}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  )
}

export default Layout;