import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      { props.additionalFeatures.length ? (
        <ol type="1">
          { props.additionalFeatures.map( item => (
            // <AdditionalFeature key={item.id} feature={item} />
            <AdditionalFeature key={ item.id } feature={ item } addFeatures={ props.addFeatures } />
          ) ) }
        </ol>
      ) : (
          <p>Now that is a sweet ride...you should buy it!</p>
        ) }
    </div>
  );
};

export default AdditionalFeatures;
