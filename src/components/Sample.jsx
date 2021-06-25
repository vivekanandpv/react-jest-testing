import React from 'react';

const Sample = (props) => {
  return (
    <>
      {props.showTitle ? (
        <h3 data-testid='h3-title'>{props.title}</h3>
      ) : (
        <h3 data-testid='h3-default'>Default content</h3>
      )}
    </>
  );
};

export default Sample;
