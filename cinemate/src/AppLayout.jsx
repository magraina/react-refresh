import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const getMediaColorScheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
};

function App() {
  const [darkTheme, setDarkTheme] = useState(getMediaColorScheme);

  // Change via Button
  const toggleTheme = () => {
    setDarkTheme((currentState) => !currentState)
  };

  // Change when system changes
  const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQueryList.addEventListener('change', (event) => {
    setDarkTheme(event.matches);
  });

  useEffect(()=> {
    const body = document.querySelector('body');
    darkTheme ? body.classList.add('dark') : body.classList.remove('dark')
  }, [darkTheme])

  return (
    <div className={ (darkTheme ? 'dark ' : '') + 'main'}>
      <Header toggleTheme={toggleTheme} />
      <main className='bg-gray-200 dark:bg-gray-800'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App
