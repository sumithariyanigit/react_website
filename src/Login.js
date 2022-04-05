import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Components/Login';

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

<Login />
 
<Footer />

</>
);
}

export default BookingPackage;
