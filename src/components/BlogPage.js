import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';

/* import LogoComponent from '../subComponents/LogoComponent' */
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';

import Laura125 from '../assets/images/laura-125.bmp';
import Laura256 from '../assets/images/laura-256.jpg';
import Mirjam125 from '../assets/images/mirjam-87-125.png';
import Mirjam222 from '../assets/images/mirjam125-222.gif';


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
padding: 0.5rem 0;

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
function makeLauraBigger(e) {
  e.target.setAttribute( 'src', Laura256);
  e.target.setAttribute('alt', 'laura256');
}

function makeMirjamBigger(e) {
  e.target.setAttribute( 'src', Mirjam222);
  e.target.setAttribute('alt', 'mirjam222');
}

const BlogPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>

    <Box>
      {/* <LogoComponent theme='light'/> */}
      <SocialIcons theme='light'/>
      <PowerButton />
      <ParticleComponent theme='light' />

      <Main>
        {/* <Title>
          Laura
        </Title> */}

        <Description>
          <img src={Laura125} alt="laura1" onClick={makeLauraBigger}
          />
          <p>Click on the photo</p>
        </Description>

      </Main>

      <Main>
        {/* <Title>
          Mirjam
        </Title> */}

        <Description>
          <img src={Mirjam125} alt="mirjam1" onClick={makeMirjamBigger}
            />
            <p>Click on the photo</p>
        </Description>

      </Main>

    </Box>
    </ThemeProvider>  
  )
}

export default BlogPage