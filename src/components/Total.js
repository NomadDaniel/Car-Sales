import React from 'react';

const Total = props => {
  return (
    <div className="content">

      {/* <h4>Base Amount: ${ props.car.price }</h4> */ }
      <p> (Original Price: $26395) </p>
      <h4> Price with selected features: ${ props.car.price + props.additionalPrice }</h4>

    </div>
  );
};

export default Total;
