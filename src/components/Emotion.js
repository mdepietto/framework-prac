import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
// emotion/react did not work otherwise
 /** @jsxImportSource @emotion/react */

const Div = styled.div`
  padding: 4rem 2rem;
  background-color: pink;
  &:hover { background-color: red; };
  color: white;
`

const Heading = styled.h1`
  background-color: ${ props => props.bg };
  color: ${ props => props.fg };
`

// uses the Heading template but replaces h1 with h4
const SubHeading = Heading.withComponent('h4')

const Emotion = () => {
  return (
    <div>
      <Div>This is my page</Div>
      <Heading bg='red' fg='green'>Hey there</Heading>
      <SubHeading bg='yellow' fg='gray'>What's up</SubHeading>
      <div
        css={css`
          padding: 10px;
          background-color: red;
          font-size: 106px;
          border-radius: 6px;
        `}
      >
        Emotion CSS-in-JS
      </div>
    </div>
  );
}

export default Emotion;