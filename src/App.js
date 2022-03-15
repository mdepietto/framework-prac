import React from 'react'

import Emotion from './components/Emotion'
import Emotion2 from './components2/Emotion2'

import Material from './components/Material'
import Material2 from './components2/Material2'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

import ReactForm from './components/ReactForm'

//changes default theme properties - mui
const theme = createTheme({
  palette: {
      primary: {
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
      {/* <Emotion2 /> */}
      {/* <ThemeProvider theme={ theme }>
        <Material />
      </ThemeProvider> */}
      <Material2 />
      {/* <ReactForm /> */}
    </div>
  );
}

export default App;

// react hook form https://react-hook-form.com/