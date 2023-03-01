import React from 'react';
import './LandingPage.css';
import logo from '../../assets/Frame 1.png'

const googleFormUrl = "https://forms.gle/GQHjuMHctZFoPa2c9";
const handleButtonClick = () => {
  window.open(googleFormUrl, '_blank');
}

const Info = () => (
  <div className="info">
    <div className='infoText'>
      <h1>Can't Decide? <span className="swype">Swype!</span></h1>
      <br />
      <h2>
        Swype is a decision making tool that considers the dietary restrictions and
        preferences of every person in the group!
      </h2>
      
      <h2><span className="swype">Sync into a group session, and Swype</span> to find the best option for everyone involved!</h2>
      <br />
      <button onClick={handleButtonClick} className="button">Get Notified When we Launch!</button>
    </div>

  </div>
);

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Swype Logo" />
  </div>
);

function LandingPage() {
  return (
    <div className="container">
      <Info />
      <Logo />
    </div>
  );
}

export default LandingPage;