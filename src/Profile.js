import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";

function Profile() {

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

 <section className="border-style pad-12"> 
  <div className="container">
     <div className="row">
        <div className="col-lg-12">
         <div className='userImg'>
             <div className='imgbox'>
             <img src='assets/images/profile.png' />
             </div>
             <div className=''>
             <h4>John pauls</h4>
             <div className="certified"><i className="fad fa-badge-check"></i> certified user</div>
             </div>          
         </div>
        </div>       
     </div>

     <div className='row mt-90'>
         <div className='col-lg-4 text-center'>
             <div className='usercard'>
             <h4>05</h4>
             <h5>Previous Booking</h5>
         </div>
         </div>
         <div className='col-lg-4 text-center'>
             <div className='usercard'>
             <h4>AED 104</h4>
             <h5>Total Payment</h5>
         </div>
         </div>
         <div className='col-lg-4 text-center'>
             <div className='usercard'>
             <h4>11</h4>
             <h5>Your Review</h5>
         </div>
         </div>
     </div>

  </div>
</section>

    <Footer />
     </>
    );

}

export default Profile;