import React from 'react';
import './EmptyText.css';

const EmptyText = ({ children, margin, fontsize }) => {

  const styles = { margin: margin, fontSize: fontsize };

  return(
    <div className='empty' style={styles}>
      {children}
    </div>
  );
}

export default EmptyText;
