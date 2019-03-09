import React from 'react';
import './DesktopHome.css';
import './MobileHome.css';

const PricesAvailibility = (props) => {

    return (
      <div className="prices-availibility-item">
      <h5 className="text-center care-type-title">{props.type}</h5>
        <div key={props.isSelected} className="availibility-prices mb-3 card">
            <p className="text-center mt-1 mb-1">{ props.ageRange }</p>
            <hr/>

            <div className="time-cost-border">
              <p className="text-center mt-2">Full-Time</p>
              <p className="text-center">Monday Thru Friday</p> 
              <p className="text-center">7:30AM - 6:30PM</p> 
              <p className="text-center">Cost: ${ props.fullTimeCost } per Month</p> 
            </div>

            <div className="time-cost-border">
              <p className="text-center mt-2">Part-Time</p>
              <p className="text-center">Three days a Week</p> 
              <p className="text-center">7:30AM - 6:30PM</p> 
              <p className="text-center">Cost: ${ props.partTimeCost } per Month</p>
            </div>
          </div>
      </div>
    );
  }
  
  export default PricesAvailibility

