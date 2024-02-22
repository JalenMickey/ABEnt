import React from 'react';
import './AboutSection.css'; // Importing the CSS file

const AboutSection = () => {
  return (
    <div className="about-section">
      <img src='./images/anthony.jpg' alt="Anthony Smith" />
      <div className="about-text">
        <p>
          Anthony Smith is a versatile songwriter, producer, publisher, and executive who has achieved success in many genres, including Country, Pop, R&B, and Jazz. Artists who have recorded his songs include Chris Young, Reba, Parmalee, Lauren Alaina, Ben Gallaher, Manny Blu, Dana International, Bucky Covington, Lonestar, Clay Walker, Rodney Atkins, Regina Belle, Vince Gill, Jo Dee Messina, Neal McCoy, RBD, Donna Summer, Emerson Drive, Adam Gregory, Heartland, Shane Yellowbird, Jaydee Bixby, Trent Tomlinson, Rio Grand, The Wilkinsons, Kirk Whalum, Suzy Bogguss, Kenny Rogers, Aleksander With, The Wiggins, Julie Reeves, and Anita Cochran among others.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
