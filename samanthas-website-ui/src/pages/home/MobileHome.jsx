import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobileHome.css';

class MobileHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      careType: {
        infants: {
          ageRange: "Age: (3 to 12) Months",
          fullTimeCost: "1,320.00",
          partTimeCost: "780.00",
          selected: "INFANTS"
        },
        toddlers: {
          ageRange: "Age: (13 to 23) Months",
          fullTimeCost: "1,210.00",
          partTimeCost: "715.00",
          selected: "TODDLERS"
        },
        preschoolers: {
          ageRange: "Age: (2+ years)",
          fullTimeCost: "1,100.00",
          partTimeCost: "650.00",
          selected: "PRESCHOOLERS"
        },
        selectedCareType: {
          ageRange: "Age: (3 to 18) Months",
          fullTimeCost: "1,320.00",
          partTimeCost: "780.00",
          selected: "INFANTS"
        }
      }
    }

    this.selectCareType = this.selectCareType.bind(this);
  }

  selectCareType(careTypeStr) {
    let selectedCareType = {...this.state.careType[careTypeStr]};
    let careType = { ...this.state.careType, selectedCareType: selectedCareType};
    this.setState({careType: careType});
  }

  render() {
    let { careType: { selectedCareType } } = this.state;
    let isSelected = selectedCareType.selected;
    return (
      <div className="MobileHome">
        <img className="home-image" src={`${process.env.PUBLIC_URL}/img/daycare-stock-1.jpg`} alt="Woman with daycare children on a desk playing with play dough"/>
        <h4 className="enrollment-text">Currently Open For Enrollment</h4>

        <div className="care-type-btns">
          <button className={(isSelected === "INFANTS") ? "selectedActive" : ""} onClick={() => this.selectCareType("infants")}>Infants</button>
          <button className={(isSelected === "TODDLERS") ? "selectedActive" : ""} onClick={() => this.selectCareType("toddlers")}>Toddlers</button>
          <button className={(isSelected === "PRESCHOOLERS") ? "selectedActive" : ""} onClick={() => this.selectCareType("preschoolers")}>Preschoolers</button>
        </div>

        <div key={isSelected} className="mb-3">
            <p className="text-center mt-3">{ selectedCareType.ageRange }</p>
            <p className="text-center mt-2">Full-Time</p>
            <p className="text-center">Monday Thru Friday 7:30AM - 6:30PM</p> 
            <p className="text-center">Cost: ${ selectedCareType.fullTimeCost } per Month</p> 
            
            <p className="text-center mt-2">Part-Time</p>
            <p className="text-center">Three days a Week 7:30AM - 6:30PM</p> 
            <p className="text-center">Cost: ${ selectedCareType.partTimeCost } per Month</p>
            <p className="text-center mt-2">(For Part-Time, more or less days can be negotiated.)</p> 
          </div>
        <Link onClick={this.props.toggleNav} to="/contact"><button className="contact-samantha-btn">Contact Samantha</button></Link>
      </div>
    );
  }
}

export default MobileHome;
