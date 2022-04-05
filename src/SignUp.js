import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";
import SignUp from './Components/SignUp';

function BookingPackage() {
    
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

<SignUp />
 
<Footer />

</>
);
}

export default BookingPackage;
