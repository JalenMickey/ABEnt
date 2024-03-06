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
      <img src='./images/brian.jpg' alt="Anthony Smith" />
      <div className="about-text">
        <p>
        "BT" has held the position of VP/Programming at America’s Largest Radio Companies and has served as Program Director for major Country Radio Stations in prominent markets including New York, San Francisco, Atlanta, and Tampa. With over 25 years of experience in marketing and operations management within the Country Radio industry, BT maintains close relationships with top artists, record companies, agents, bookers, writers, and managers in Nashville, New York, and Los Angeles. He provides ongoing consultation to record companies on single and song selection. On the creative side, BT is a published songwriter in Nashville, having collaborated with several ACM/CMA nominated artists. His songwriting credits include works for artists such as Locash, Chris Janson, and Leah Turner. Additionally, BT possesses expertise in talent development and coaching, orchestrating large-scale promotions, and optimizing social media strategies.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
