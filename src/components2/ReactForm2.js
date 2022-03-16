import React from 'react'
import { useForm } from 'react-hook-form'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { FormGroup, TextField, MenuItem, Typography } from '@material-ui/core'

const ReactForm2 = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data);

    const theme = createTheme({
        palette: {
            text: {
                secondary: 'rgba(253, 235, 235)'
            }
        }
    })

    return (
        <ThemeProvider theme={ theme }>
            <FormGroup
                onSubmit={ handleSubmit(onSubmit) }
                style={{
                    width: '60%',
                    margin: '15px auto',
                    background: 'purple',
                    padding: '30px',
                    borderRadius: '25px',
                }}    
            >
                <Typography
                    variant='h3'
                    style={{ margin: '0 auto' }}
                >
                    Tell me about your shelf
                </Typography>
                <TextField
                    label='Chosen Name'
                    { ...register('chosenName') }
                />
                <TextField
                    label='Spirit Animal'
                    { ...register('spiritAnimal') }
                />
                <TextField
                    select
                    label='Hobby'
                    { ...register('hobbies') }
                >
                    <MenuItem value='sports'>Sports</MenuItem>
                    <MenuItem value='competitive eating'>Competitive Eating</MenuItem>
                    <MenuItem value='sleeping'>Sleeping</MenuItem>
                </TextField>
                <input type='submit' />
            </FormGroup>
        </ThemeProvider>
    )
}

export default ReactForm2