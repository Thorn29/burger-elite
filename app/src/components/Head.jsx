import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Head = ({ title, children }) => {
  return(
    <HelmetProvider>
      <Helmet>
        <title>{title} | BurgerElite</title>
        <meta name='description' content={children} />
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
