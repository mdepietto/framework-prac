import React from 'react'

import Emotion from './components/Emotion'

import Material from './components/Material'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

//changes default theme properties - mui
const theme = createTheme({
  palette: {
      primary: {
        // original is blue
          main: green[500]
      }
  },
  typography: {
    fontFamily: "Smooch Sans",
    h1: {
      fontSize: '8rem',
      fontWeight: 600
    }
  }
})

function App() {
  return (
    <div>
      {/* <Emotion /> */}
      <ThemeProvider theme={ theme }>
        <Material />
      </ThemeProvider>
    </div>
  );
}

export default App;

// react hook form https://react-hook-form.com/