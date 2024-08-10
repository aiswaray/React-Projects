import React, { useState } from 'react';
import '../Styles/SignIn.scss';
import logo from '../Assets/images/logo.svg';
import bgTopRight from '../Assets/images/bg-top-right.svg';
import bgBottomLeft from '../Assets/images/bg-bottom-left.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/FooterCopyright';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="sign-in">
      <img src={bgTopRight} alt="Background Top Right" className="bg-top-right" />
      <img src={bgBottomLeft} alt="Background Bottom Left" className="bg-bottom-left" />

      <div className="content-outer">
        <Link to="/splash">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h2> Sign In </h2>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username or Phone Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </span>
          </div>
          <div className="options-radio">
            <label>
              <input type="radio" name="options" id="keep-signed-in" />
              <span></span>
              Keep me signed in
            </label>
          </div>
          <div className="main-buttons">
            <button type="submit" className="signin-btn">Sign In</button>
          </div>
          <button type="button" className="forgot-password">
            I forgot my password
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
