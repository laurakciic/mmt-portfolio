import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';

/* import LogoComponent from '../subComponents/LogoComponent' */
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
font-size: calc(0.6em + 1vw);

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

a:link {
  color: red;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: red;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}
`

const OurSkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

    <Box>
      {/* <LogoComponent theme='light'/> */}
      <SocialIcons theme='light'/>
      <PowerButton />
      <ParticleComponent theme='light' />

      <Main>
        <Title>
          • Laura •
        </Title>
        <Description>
        <dl>
            <dt>
              Elementary School: 
              <a target="_blank" href="http://os-tenja.skole.hr/">  OŠ Tenja </a>
            </dt>
            <dt>
              High School:
              <a target="_blank" href="http://www.gimnazija-prva-os.skole.hr/">  I. gimnazija OS </a>
            </dt>
            <dt>
              Faculty: 
              <a target="_blank" href="https://www.ferit.unios.hr/2021/">  FERIT, Osijek</a>
            </dt>
            <dt>
              Skills:
            </dt>
              <dd>
                <li>
                  problem solving, communication, proffiency, teamwork
                </li>
                <li>
                  <a target="_blank" href="https://github.com/laurakciic">Github account</a>
                </li>
            </dd>
          </dl>
        </Description>
      </Main>

      <Main>
        <Title>
          • Mirjam •
        </Title>
        <Description>
          <dl>
            <dt>
              Elementary School: 
              <a target="_blank" href="http://os-retfala-os.skole.hr/">  OŠ Retfala</a>
            </dt>
            <dt>
              High School:
              <a target="_blank" href="http://gimnazija-treca-os.skole.hr/">  III. gimnazija OS</a>
            </dt>
            <dt>
              Faculty: 
              <a target="_blank" href="https://www.ferit.unios.hr/2021/">  FERIT, Osijek</a>
            </dt>
            <dt>
              Skills: 
            </dt>
            <dd>
              <li>
                problem solving, communication, proffiency, teamwork
              </li>
              <li>
              <a target="_blank" href="https://gitlab.com/mirjam.ercegovac">Gitlab account</a>
              </li>
            </dd>
          </dl>
        </Description>
      </Main>

    </Box>
    </ThemeProvider>  
  )
}

export default OurSkillsPage