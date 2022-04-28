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
font-size: calc(1em + 0.7vw);

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
font-size: calc(0.6em + 0.5vw);
justify-content: left;
align-items: left;
padding: 2rem 0;

${Main}:hover &{
  color:${props => props.theme.body};
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
          <ul>
            <li>
              Gender: Female
            </li>
            <li>
            Address:
            <a target="_blank" href="https://www.google.com/maps/place/Tenja/@45.4844545,18.6942016,12z/data=!3m1!4b1!4m5!3m4!1s0x475ce8d5b647cfad:0x2600ad515336f582!8m2!3d45.501104!4d18.7497056">Tenja</a>
            , Osijek
            </li>
            <li>
              Place of birth: 
              <a target="_blank" href="https://www.google.com/search?q=osijek&sxsrf=ALiCzsbeDfoH98JC3ZZr64shaJfEC703Jg:1651179055424&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwi0mbyo0bf3AhWhzTgGHcUrDKQQ_AUoAnoECAIQBA&biw=1366&bih=625&dpr=1">Osijek</a>
            </li>
            <li>
              Date of birth:  05.02.2001.
            </li>
            <li>
              Hobby: cooking, weight training, anime
            </li>
          </ul>
        </Description>
      </Main>

      <Main>
        <Title>
          Mirjam
        </Title>
        <Description>
          <ul>
            <li>
              Gender: Female
            </li>
            <li>
              Address:
              <a target="_blank" href="https://www.google.com/maps/place/31000,+Retfala/@45.5652981,18.6321904,14z/data=!3m1!4b1!4m5!3m4!1s0x475ce73d65a36b6d:0x431ba97c96917c2c!8m2!3d45.5653!4d18.6497?hl=hr">Retfala</a>
              , Osijek
            </li>
            <li>
              Place of birth: 
              <a target="_blank" href="https://www.google.com/search?q=osijek&sxsrf=ALiCzsbeDfoH98JC3ZZr64shaJfEC703Jg:1651179055424&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwi0mbyo0bf3AhWhzTgGHcUrDKQQ_AUoAnoECAIQBA&biw=1366&bih=625&dpr=1">Osijek</a>
            </li>
            <li>
              Date of birth:  22.04.2000.
            </li>
            <li>
              Hobby: cooking, painting, photography, diy
            </li>
          </ul>
        </Description>
      </Main>

    </Box>
    </ThemeProvider>  
  )
}

export default AboutPage