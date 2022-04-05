import React, {useEffect} from 'react';
import Header from './Header';
import HeroSection from './Components/HeroSection'
import FeaturedCategory from './Components/FeaturedCategory';
import PopularCategory from './Components/PopularCategory';
import RecentBlogs from './Components/RecentBlogs';
import Testimonial from './Components/Testimonial';
import Footer from './Footer';
import Subscribe from './Components/Subscribe';
// import { Outlet, Link } from "react-router-dom";
import BestOffers from './Components/BestOffers';


function Home() {
 
  useEffect( () => {
    const body = document.querySelector("body");
    document.body.classList.add("body_header");
    return () => {
      body.classList.remove("body_header");
    }
  } );

 
  return (
    <>

     <Header />

<main>
     <HeroSection />

     <FeaturedCategory />

     <PopularCategory />

     <BestOffers />     

     <RecentBlogs />
     
     <Testimonial />

     <Subscribe />   

     <Footer />
</main>



    </>
  );
}

export default Home;
