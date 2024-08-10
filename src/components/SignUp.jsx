import React, { useState } from 'react';
import '../Styles/SignUp.scss';
import logo from '../Assets/images/logo.svg';
import bgTopRight from '../Assets/images/bg-top-right.svg';
import bgBottomLeft from '../Assets/images/bg-bottom-left.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/FooterCopyright';
import { BsEye, BsEyeSlash } from 'react-icons/bs';


const SignUp = () => {
    const [formValue, setFormValue] = useState({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          kitchenName: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValue((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handlePhoneNumberChange = (e) => {
        const { value } = e.target;
        const regex = /^[0-9\b]+$/;
        if (value === '' || regex.test(value)) {
            setFormValue((prevData) => ({
            ...prevData,
            phoneNumber: value,
          }));
        }
    };
      
    const [showPassword, setShowPassword] = useState(false);
    

  return (
    <div className="register">
        <img src={bgTopRight} alt="Background Top Right" className="bg-top-right" />
        <img src={bgBottomLeft} alt="Background Bottom Left" className="bg-bottom-left" />

        <div className="content-outer">
            <Link to="/splash">
            <img src={logo} alt="Logo" className="logo" />
            </Link>
            <h2> Sign Up </h2>
            <form>
            <div className="input-row">
                <div className="input-group">
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formValue.firstName}
                    onChange={onChange}
                    required  
                />
                </div>
                <div className="input-group">
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formValue.lastName}
                    onChange={onChange}
                    required
                />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formValue.email}
                    onChange={onChange}
                    required  
                />
                </div>
                <div className="input-group">
                <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formValue.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                />
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                <input
                    type="text"
                    placeholder="Your Kitchen Name"
                    name="kitchenName"
                    value={formValue.kitchenName}
                    onChange={onChange}
                    required     
                />
                </div>
                <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    value={formValue.password}
                    onChange={onChange}
                    required
                />
                <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                </span>
                </div>
            </div>
            <div className="input-row">
                <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formValue.confirmPassword}
                    onChange={onChange}
                    required
                />
                <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                </span>
                </div>

                <div className="input-group">
                <div className="options-radio">
                <label>
                    <input
                    type="radio"
                    name="acceptTerms"
                    checked={formValue.acceptTerms}
                    onChange={onChange}
                    />
                    <span></span>
                     Accept our terms
                </label>
                </div>
                </div>
                </div>
            <div className="main-buttons">
                <button type="submit" className="register-btn">Sign Up</button>
            </div>
            
            </form>
        </div>
        <Footer />
        </div>
    );
};


export default SignUp;