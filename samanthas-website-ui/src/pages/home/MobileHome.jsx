import React, { Component } from 'react';
import './MobileHome.css';

class MobileHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careType: {
        infants: {
          ageRange: "Age: (3 to 11) Months",
          fullTimeCost: "2,200",
          partTimeCost: "1,200"
        }
      }
    }
  }
  render() {
    let { careType } = this.state
    return (
      <div className="MobileHome">
        <img className="home-image" src={`${process.env.PUBLIC_URL}/img/daycare-stock-1.jpg`}/>
        <h4 className="enrollment-text">Currently Open For Enrollment</h4>

        <div className="care-type-btns">
          <button>Infants</button>
          <button>Toddlers</button>
          <button>Kids</button>
        </div>

        <div className="mb-3">
          <p className="text-center mt-3">{ careType.infants.ageRange }</p>
          <p className="text-center mt-2">Full-Time</p>
          <p className="text-center">Monday Thru Friday 8AM - 6PM</p> 
          <p className="text-center">Cost: { careType.infants.fullTimeCost } per Month</p> 
          
          <p className="text-center mt-2">Part-Time</p> 
          <p className="text-center">Three days a Week 8AM - 6pm</p> 
          <p className="text-center">Cost: { careType.infants.partTimeCost } per Month</p>
        </div>

        <button className="contact-samantha-btn">Contact Samantha</button>
      </div>
    );
  }
}

export default MobileHome;
