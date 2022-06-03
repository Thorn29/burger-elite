import React from 'react';
import './BuilderCheckbox.css';

const BuilderCheckbox = ({ checked, change }) => {
  return(
    <>
    <label className='builder-checkbox'>
      <input className='builder-checkbox__input' type='checkbox' checked={checked} onChange={change} />
       Bun seeds
    </label>
    </>
  );
}

export default BuilderCheckbox;
