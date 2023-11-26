// LoginComponent.jsx

import React, { useEffect, useState } from 'react';
import '../../styles/login-styles.css'; 

const LoginComponent = () => {
  const [isSignUpActive, setSignUpActive] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [width,setWidth]=useState(null)

  const handleToggle = () => {
    setSignUpActive(!isSignUpActive);
  };

  const handleModeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    // Initial width
    setWidth(window.innerWidth);
  
    // Event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
      <div className={`form-container sign-up`}>
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <p className="form-switch" onClick={handleToggle}>Already have an account? Sign In</p>
        </form>
      </div>
      <div className={`form-container sign-in`}>
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        {width < 768 && <p className="form-switch" onClick={handleToggle}>Don't have an account? Sign Up</p>}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={handleToggle}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" id="register" onClick={handleToggle}>Sign Up</button>
          </div>
          {/* <div className="mode-toggle">
        <label className="switch">
          <input type="checkbox" onChange={handleModeToggle} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
        <span className={`mode-text ${isDarkMode ? 'dark-mode-text' : ''}`}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
