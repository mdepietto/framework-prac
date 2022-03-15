import React from 'react'

import { Button, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AttachMoney } from '@material-ui/icons'

// creates custom class
const useStyles = makeStyles({
    mockParagraph: {
        backgroundColor: '#494944',
        color: 'red',
        fontSize: '24px',
        fontFamily: 'Roboto'
    }
})

const Material = () => {

    const classes = useStyles()

    return (
        <div>
            <Button
                variant='contained'
                color='primary'
                onClick={ () => alert('ow') }
            >
                Press me
            </Button>
            <Button
                variant='text'
            >
                Press me
            </Button>
            <Button
                variant='outlined'
                color='secondary'
                size='large'
                fullWidth
            >
                Press me
            </Button>
            <IconButton
                // className={ classes.mockParagraph }
                // style={{ color: 'red', backgroundColor: 'blue' }}
                color='primary'
            >
                <AttachMoney />
            </IconButton>
            <Typography
                variant='h1'
                color='primary'
            >
                hello there
            </Typography>
            <Typography
                variant='h6'
                className={ classes.mockParagraph }
            >
                There's a hole in my pants
            </Typography>
        </div>
    )
}

export default Material