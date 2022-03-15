import React from 'react'
import { useForm } from 'react-hook-form'

const ReactForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <input { ...register('firstname', { required: true }) } />
            <input { ...register('lastname') } />
            <input type='number' defaultValue={ 18 } { ...register('age', { min: 18, max: 99 }) } />
            <select { ...register('gender') }>
                <option value='female'>female</option>
                <option value='male'>male</option>
                <option value='other'>other</option>
            </select>
            <input type='submit' />
        </form>
    )
}

export default ReactForm