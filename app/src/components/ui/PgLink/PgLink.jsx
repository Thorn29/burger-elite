import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo1 } from '../../../assets/icons/fast-food.svg';
import ActionButton from '../ActionButton/ActionButton';
import './PgLink.css';

const PgLink = ({ url, children, buttontext }) => {
  return(
    <div className='pg-link'>
      <div className='pg-link__content'>
        <Logo1 className='pg-link__logo' />
        <p className='pg-link__text'>{children}</p>
      </div>
      <Link to={url}>
        <ActionButton width='80%'>{buttontext}</ActionButton>
      </Link>
    </div>
  );
}

export default PgLink;
