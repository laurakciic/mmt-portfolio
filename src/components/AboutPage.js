import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubunto Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill:${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

${Main}:hover &{
  color:${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem;
}
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

    <Box>
      <LogoComponent theme='dark'/>
      <SocialIcons theme='dark'/>
      <PowerButton />
      <ParticleComponent theme='dark' />

      <Main>
        <Title>
          Laura
        </Title>
        <Description>
          laurin opis
        </Description>
        <Description>
          <strong> wiiii </strong>
          <ul>
            <li>
              1
            </li>
            <li>
              2
            </li>
          </ul>
        </Description>
        <Description>
          <strong> tools </strong>
          <ul>
            <li>
              11111111
            </li>
          </ul>
        </Description>
      </Main>

      <Main>
        <Title>
          Mirjam
        </Title>
        <Description>
          mirjamin opis
        </Description>
        <Description>
          <strong> wiiii2 </strong>
          <p>
            1, 2, 3, 4, 5
          </p>
        </Description>
        <Description>
          <strong> tools </strong>
          <p>
            tttttttttt
          </p>
        </Description>
      </Main>

    </Box>
    </ThemeProvider>  
  )
}

export default AboutPage