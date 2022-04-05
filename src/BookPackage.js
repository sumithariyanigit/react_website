import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";
import BookingPackage from './Components/BookingPackage';

function PackageDetail() {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );

    return (
    <>
    
   <Header />

   <BookingPackage />

   <Footer />

    </>
    );
  }
  
  export default PackageDetail;