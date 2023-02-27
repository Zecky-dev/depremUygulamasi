import React from 'react';
import AppRouter from './AppRouter';

import ThemeContextProvider from './context/ThemeContext';
const App = () => {

  return (
    <ThemeContextProvider>
      <AppRouter/>
    </ThemeContextProvider>
  )
}

export default App;