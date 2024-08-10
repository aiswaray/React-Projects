import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/splash" element={<SplashScreen/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
