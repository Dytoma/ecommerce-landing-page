import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { Navigation, Details, ImageSwitch } from './Components'
import { darkMode, setDarkMode, removeDarkMode } from './features/darkModeSlice';

function App() {
  const dark = useSelector(darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      dispatch(removeDarkMode());
      document.documentElement.classList.remove('dark')
    } else {
      dispatch(setDarkMode());
      document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <div>
      <Navigation />
      <div className='lg:mx-[13.3125rem] md:mx-16 md:pt-[5.625rem] md:flex md:flex-col lg:flex-row items-center md:justify-between md:mb-32 lg:space-x-32' role='main'>
        <ImageSwitch />
        <Details />
      </div>
      <div>
        <h2 className='dark:text-grayishBlue text-base font-semibold mb-8 text-center'>Coded by <a href="https://www.frontendmentor.io/profile/Dytoma" className='text-orange'>Dytoma</a></h2>
      </div>
    </div>
  );
}

export default App;
