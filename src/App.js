import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

// Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import OurSkillsPage from './components/OurSkillsPage';
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar1 from "./subComponents/SoundBar1";
import SoundBar2 from "./subComponents/SoundBar2";


function App() {

  const location = useLocation();

  return <>

    <GlobalStyle />

      <ThemeProvider theme = {lightTheme}>

      <SoundBar1 />
      <SoundBar2 />
      
      {/* for framer-motion animation on page change*/}
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={OurSkillsPage}/>

      </Switch>
      </AnimatePresence>

      

      </ThemeProvider>

    </>
    
}

export default App
