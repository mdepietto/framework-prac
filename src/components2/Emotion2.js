import React from 'react'
import styled from '@emotion/styled'

const SmallBox = styled.div`
    width: 150px;
    height: 150px;
    margin: 10px auto;
    text-align: center;
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    border: 6px dashed black;
    border-radius: 15px;
    background-color: ${ props => props.color };
    &:hover {
        background-color: orange;
        color: blue;
    }
`

const SmallText = SmallBox.withComponent('h2')

const Emotion2 = () => {
    return (
        <div>
            <SmallBox color={ 'green' }>
                I'm a small box
            </SmallBox>
            <SmallText color={ 'blue' }>
                Well hello there
            </SmallText>
        </div>
    )
}

export default Emotion2