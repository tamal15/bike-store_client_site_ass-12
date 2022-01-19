import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReviewHome from '../ReviewHome/ReviewHome';
import HomeBlog from './HomeBlog/HomeBlog';
import './Home.css'
import EquipMent from './EquipMent/EquipMent';
import Client from './Client/Client';
import Contact from './Contact/Contact';

const Home = () => {
  
    return (
        <div className='keywords'>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <EquipMent></EquipMent>
            <Client></Client>
            <ReviewHome></ReviewHome>
            <HomeBlog></HomeBlog>
            <Contact></Contact>
            <Footer></Footer>

         
      
        </div>
    );
};

export default Home;