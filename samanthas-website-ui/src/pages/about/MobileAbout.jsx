import React, { Component } from 'react';
import './MobileAbout.css';

class MobileAbout extends Component {
  render () {
    return (
      <div className="MobileAbout">
        <h3 className="text-center">About Samantha</h3>
        <img className="about-me-image-1" src={`${process.env.PUBLIC_URL}/img/about-me-image.jpg`} alt="Samantha with her daughter smiling." />
        <p>
          My passion for childcare began when I started watching some of my very young family member's at an early age (I have a really large family...).
          years later I became an assistant to a daycare provider, I was employed there for three years before the owner retired.
          Soon after, I started my own childcare service.
          Going on four years now I have watched so many of my daycare kids go from babies to Elementary school students.
          I truly care about every child I take under my wing and treat him/her with the same love and attentiveness as I do my own 2 year old.
          </p>

        <p>Hope to hear from you soon, we would love to add you to the family.</p>


        <h3 className="text-center mt-3">What To Expect</h3>
        <img className="about-me-image-1" src={`${process.env.PUBLIC_URL}/img/daycare-stock-2.jpg`} alt="Samantha with her daughter smiling." />
        <h5>I provide:</h5>
        <ul>
          <li>healthy breakfast and lunch everyday. (will cater to any allergies.)</li>
          <li>Arts and Crafts and/or Science experiments/projects</li>
          <li>Early Learning: <ul>
            <li>ABCs</li>
            <li>Count to 100</li>
            <li>Site Words</li>
            <li>preschool math</li>
          </ul> </li>
          <li>Potty Training</li>
          <li>Field Trips (Pumpkin Patch, Indoor Jungle Gyms, etc).</li>
          <li>Cots (low-height beds) and blankets for nap time.</li>
          <li>More than enough Books and Toys.</li>
          <li>And most important (love and hugs).</li>
        </ul>

        <h5>What you need to provide:</h5>
        <ul>
          <li>Diapers</li>
          <li>Wipes</li>
        </ul>
      </div>
    );
  }
}

export default MobileAbout;
