import React from 'react';
// __________________________ //
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// __________________________ //
import { addFeatures, removeFeatures } from "./actions/featureActions";

// __________________________ //
const App = ( { additionalPrice, additionalFeatures, car, addFeatures, removeFeatures } ) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={ car } />
        <AddedFeatures car={ car } removeFeatures={ removeFeatures } />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={ additionalFeatures } addFeatures={ addFeatures } />
        <Total car={ car } additionalPrice={ additionalPrice } />
      </div>
    </div>
  );
};
// __________________________ //

function mapStateToProps ( state ) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}
// __________________________ //

export default connect( mapStateToProps, { addFeatures, removeFeatures } )( App );