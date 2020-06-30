import React from 'react';

// Anything inside the <Scroll> JSX tag gets passed into the Scroll component as a children prop
const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;