import React from 'react';
import NotFound from '../components/basic/NotFound';
import Head from '../components/Head';


const Error = ({ history }) => {
  return(
    <div className='page center'>
    <Head title='Page Not Found' />
      <NotFound click={() => history.push('/')} button='Home page' desc='The page you were looking for does not exist' />
    </div>
  );
}

export default Error;
