import React from 'react';
import './ActionButton.css';

const ActionButton = ({ click, width, minwidth, disable, children }) => {

  const styles = {width: width, minWidth: minwidth};

  return(
    <button className='action-button' style={styles} onClick={click} disabled={disable}>
      {children}
    </button>
  );
}

export default ActionButton;
