import React from 'react';
import Burger from '../components/builder/Burger';
import BuilderControls from '../components/builder/BuilderControls';
import Head from '../components/Head';

const Builder = (props) => {
  return(
    <div className='page'>
    <Head title='Builder'>Build the burger of your dreams, using our simple visual interface!</Head>
      <Burger />
      <BuilderControls />
    </div>
  );
}

export default Builder;
