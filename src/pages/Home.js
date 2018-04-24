import React from 'react';
import WeGood from './../images/weGoodtxt.gif';
import CloudIndex from './../images/cloud.jpg';
import './home.css';

const Home = () =>
{
  return (
     <div id="main">
        <div id="mainLeft">
          <img src={WeGood} alt="We're Good. Just ask our moms." />
          <div class="text">
            <h5>
              WEB + INTERACTIVE + BRANDING + PRINT + SIGNAGE. IT'S WHAT WE LOVE TO DO. SO RELAX, WE'VE GOT THIS.
            </h5>
          </div>
        </div>
        <div id="mainRight">
          <img src={CloudIndex} />
        </div>
      </div>
    );
}

export default Home;


//checkout nextJS
