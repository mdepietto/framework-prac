import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Typography } from '@material-ui/core'
import { green, purple } from '@material-ui/core/colors'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
            contrastText: purple[500]
        },
        secondary: {
            main: purple[500],
            contrastText: green[500]
        }
    },
    typography: {
        fontFamily: "'Sansita Swashed', cursive;"
    }
})

const useStyles = makeStyles({
    bigOlParagraph: {
        backgroundColor: '#293790',
        color: 'white',
        fontSize: '60px',
        fontFamily: 'Roboto'
    }
})

const Material2 = () => {
    return (
        <ThemeProvider theme={ theme }>
            <Button
                variant='contained'
                color='primary'
            >
                Press muh
            </Button>
            <Button
                variant='contained'
                color='secondary'
            >
                No, press muh
            </Button>
            <Typography
                className={ useStyles().bigOlParagraph }
            >
                There once was a man from Peru, who dreamt he was eating his shoe...
            </Typography>
        </ThemeProvider>
    )
}

export default Material2