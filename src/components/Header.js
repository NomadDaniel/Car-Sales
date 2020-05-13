import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={ props.car.image } alt={ props.car.name } />
      </figure>
      <h1>{ props.car.name }</h1>
      <p> (Original Price: $26395) </p>
      <p>Price with selected features: ${ props.car.price }</p>

    </>
  );
};

export default Header;
