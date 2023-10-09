import React from 'react';
import Head from '../components/Head';
import ImageBox from '../components/basic/ImageBox';

const About = () => {
  return(
    <div className='page'>
    <Head title='About'>Find out everything you want to know about BurgerElite</Head>
      <ImageBox heading='About Us' image='/static/fast-food.jpg'>
      This is an example app built using <strong>ReactJS & Redux</strong> for the front end, <strong>Node & Express</strong> for the backend, along with a <strong>PostgreSQL</strong> database. At the time of development, the name <strong>BurgerElite</strong> didn't belong to any actual fast food company.<br/><br/>Images were collected from various websites all accross the internet, and the icons used were downloaded from <strong>FontAwesome</strong>, except the logo icon. The app was both designed and developed by <strong>Thorn 29</strong>, from scratch. If you have any further questions, <a href='https://thorn29.github.io' target='_blank' rel="noreferrer">contact me</a>.
      </ImageBox>
    </div>
  );
}

export default About;
