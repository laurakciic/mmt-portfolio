import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';

/* import LogoComponent from '../subComponents/LogoComponent' */
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';

import video1 from '../assets/video/mirjam-video.mp4'

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
width: 33vw;
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

/* const Title = styled.h2`
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
` */

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 0.5vw);
padding: 0.1rem 0;

${Main}:hover &{
  color:${props => props.theme.body};
}

/* strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem;
} */
`

const WorkPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

    <Box>
      {/* <LogoComponent theme='light'/> */}
      <SocialIcons theme='light'/>
      <PowerButton />
      <ParticleComponent theme='light' />

      <Main>
        <Description>
          
        </Description>
      </Main>

      <Main>
        <Description>
          <video width="450" height="340" controls>
            <source src={video1} type="video/mp4" />
          </video>
        </Description>
      </Main>

    </Box>
    </ThemeProvider>  
  )
}

export default WorkPage