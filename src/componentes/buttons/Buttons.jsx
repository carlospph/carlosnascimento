import React from 'react';

import './Buttons.css';

const Buttons = ({ contentButton }) => {
  return (
    <>
      <button className="btn">{contentButton}</button>
    </>
  );
};

export default Buttons;
