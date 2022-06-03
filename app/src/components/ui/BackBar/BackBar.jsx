import React from 'react';
import { withRouter } from 'react-router-dom';
import './BackBar.css';

const BackBar = ({ history }) => {
  return(
    <div className='back-bar'>
      <p className='back-bar__text' onClick={() => history.goBack()}>
        <span className='back-bar__arrow'>&#10094;</span>
         Go back
      </p>
    </div>
  );
}

export default withRouter(BackBar);
