import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobileHome.css';
import PricesAvailibility from './PricesAvailibility';
const careType = require('./cost-availibility-data.json')

class MobileHome extends Component {
  constructor(props) {
    super(props);
    console.log(careType)
    this.state = {
      show: true,
      careType: careType
    }

    this.selectCareType = this.selectCareType.bind(this);
  }

  selectCareType(careTypeStr) {
    let selectedCareType = {...this.state.careType[careTypeStr]};
    let careType = { ...this.state.careType, selectedCareType: selectedCareType};
    this.setState({careType: careType});
  }

  render() {
    let { careType: { selectedCareType: { isSelected, ageRange, fullTimeCost, partTimeCost } } } = this.state;

    return (
      <div className="MobileHome">
        <img className="home-image" src={`${process.env.PUBLIC_URL}/img/daycare-stock-1.jpg`} alt="Woman with daycare children on a desk playing with play dough"/>
        <h4 className="enrollment-text">Currently Open For Enrollment</h4>

        <div className="care-type-btns">
          <button className={(isSelected === "INFANTS") ? "selectedActive" : ""} onClick={() => this.selectCareType("infants")}>Infants</button>
          <button className={(isSelected === "TODDLERS") ? "selectedActive" : ""} onClick={() => this.selectCareType("toddlers")}>Toddlers</button>
          <button className={(isSelected === "PRESCHOOLERS") ? "selectedActive" : ""} onClick={() => this.selectCareType("preschoolers")}>Preschoolers</button>
        </div>

        <PricesAvailibility isSelected={isSelected} ageRange={ageRange} fullTimeCost={fullTimeCost} partTimeCost={partTimeCost} />
        <p className="text-center mb-2">(For Part-Time, if you need more or less than 3 days, prices can be negotiated.)</p> 

        <Link onClick={this.props.closeNav} to="/contact"><button className="contact-samantha-btn">Contact Samantha</button></Link>
      </div>
    );
  }
}

export default MobileHome;
