import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import LauraAvatar from '../assets/images/laura-av.png'
import MirjamAvatar from '../assets/images/mirjam-av.png'

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height: 75vh;
display: flex;



background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index: 1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic1{
    position: absolute;
    bottom: 0;
    left: 20%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
}
.pic2{
    position: absolute;
    bottom: 0;
    left: 70%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
}

/* .a{
    color: ${props => props.theme.text};
} */
`
const Text = styled.div`
font-size: calc(1em + 1vw);
color: ${props => props.theme.body};
padding: 1rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => 'rgba(${props.theme.bodyRgba},0.6)' };
    font-size: calc(0.5rem + 1vw);
    font-weight: 300;

}


`

const Intro = () => {
  return (
    <Box
    initial={{height:0}}
    animate={{height: '65vh'}}
    transition={{ type: 'spring', duration:2, delay:1 }}
    >
        <SubBox>
            <Text>
                <h3>Hi,</h3>
                <h5>We're Mirjam and Laura</h5>
                <h6>We made this website during the course of attending 
                    <a target="_blank" href="https://www.ferit.unios.hr/2021/">FERIT</a>
                    , as part of a 
                    <a target="_blank" href="https://moodle.srce.hr/2021-2022/course/view.php?id=101998">Multimedia technology</a>
                    class.</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration:1, delay:2 }}
            >
                <img className="pic1" src={LauraAvatar} alt="Profile Pic" />
                <img className="pic2" src={MirjamAvatar} alt="Profile Pic" />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro