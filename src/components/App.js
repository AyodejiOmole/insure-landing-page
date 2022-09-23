import Header from './header';
import Shield from './shield';
import Body from './FirstSection';
import Footer from './Footer';
import logo from '../images/logo.svg';
import hamburger from "../images/icon-hamburger.svg";
import introDesktop from "../images/image-intro-desktop.jpg";
import introLeftDesktop from "../images/bg-pattern-intro-left-desktop.svg";
import introRightDesktop from '../images/bg-pattern-intro-right-desktop.svg';

const App = () => {
  return (
    <>
      <Header Logo={logo} Hamburger={hamburger}/>
      <Shield
        IntroDesktop={introDesktop} 
        IntroLeftDesktop={introLeftDesktop}
        IntroRightDesktop={introRightDesktop}/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;


