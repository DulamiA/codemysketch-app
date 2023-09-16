import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavIndex';
import Home from './Pages/Home';
import LetsCode from './Pages/LetsCode';
import HowItWorks from './Pages/HowItWorks';
import AboutUs from './Pages/AboutUs';
import Pricing from './Pages/Pricing';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Footer from './Footer/FooterIndex';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path= '/' exact Component={Home}/>
        <Route path= '/letsCode' exact Component={LetsCode}/>
        <Route path= '/howItWorks' exact Component={HowItWorks}/>
        <Route path= '/aboutUs' exact Component={AboutUs}/>
        <Route path= '/pricing' exact Component={Pricing}/>
        <Route path= '/logIn' exact Component={LogIn}/>
        <Route path= '/signup' exact Component={SignUp}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
