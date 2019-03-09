import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobileHome.css';
import PricesAvailibility from './PricesAvailibility';
const careType = require('./cost-availibility-data.json')

class DesktopHome extends Component {
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
    let { careType: { infants, toddlers, preschoolers } } = this.state;

    return (
      <div className="DesktopHome">
        <img className="home-image" src={`${process.env.PUBLIC_URL}/img/daycare-stock-1.jpg`} alt="Woman with daycare children on a desk playing with play dough"/>
        <h4 className="enrollment-text">Currently Open For Enrollment</h4>

      <div className="price-availibility-group">
        <PricesAvailibility className={"prices-availibility-item"} type={infants.type} isSelected={infants.isSelected} ageRange={infants.ageRange} fullTimeCost={infants.fullTimeCost} partTimeCost={infants.partTimeCost} />
        <PricesAvailibility className={"prices-availibility-item"} type={toddlers.type} isSelected={toddlers.isSelected} ageRange={toddlers.ageRange} fullTimeCost={toddlers.fullTimeCost} partTimeCost={toddlers.partTimeCost} />
        <PricesAvailibility className={"prices-availibility-item"} type={preschoolers.type} isSelected={preschoolers.isSelected} ageRange={preschoolers.ageRange} fullTimeCost={preschoolers.fullTimeCost} partTimeCost={preschoolers.partTimeCost} />
      </div>
      <p className="text-center">(For Part-Time, if you need more or less than 3 days, prices can be negotiated.)</p> 
        <Link onClick={this.props.closeNav} to="/contact"><button className="contact-samantha-btn">Contact Samantha</button></Link>
      </div>
    );
  }
}

export default DesktopHome;
