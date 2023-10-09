import React from 'react';
import './EmptyText.css';

const EmptyText = ({ children, margin, fontsize, rotate }) => {

  const styles = { margin: margin, fontSize: fontsize, transform: rotate };

  return(
    <div className='empty' style={styles}>
      {children}
    </div>
  );
}

export default EmptyText;
