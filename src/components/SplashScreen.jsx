import React from 'react';
import '../Styles/SplashScreen.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/images/logo.svg';
import bgTopRight from '../Assets/images/bg-top-right.svg';
import bgBottomLeft from '../Assets/images/bg-bottom-left.svg';
import DownloadButtons from '../components/DownloadButtons';
import Footer from '../components/FooterCopyright';


const SplashScreen = () => {

const navigate = useNavigate();

  return (
    <div className="splash-main">
      <img src={bgTopRight} alt="Background Top Right" className="bg-top-right" />
      <img src={bgBottomLeft} alt="Background Bottom Left" className="bg-bottom-left" />

      <div className="content-outer">
        <img src={logo} alt="Logo" className="logo" />

        <div className="main-buttons">
          <button className="signin-btn" onClick={() => navigate('/login')}>I already have an account</button>
          <button className="register-btn" onClick={() => navigate('/register')}>Sign up as a new kitchen</button>
        </div>

        <DownloadButtons />
      </div>

      <Footer />
      
    </div>
  );
}

export default SplashScreen;