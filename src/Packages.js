import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";
import Related_blogs from './Components/Related_blogs';
import Download_app from './Components/Download_app';
import Package from './Components/Package';
import PackageTwo from './Components/PackageTwo';

function Packages() {
 return (
    <>
<Header />
  
<main>
     
<section className="hero__banner p-relative d-flex align-items-center"> 
  <div className="container">
     <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
           <div className="hero__content pr-80 text-center">
            <h1 className='text-white'>Packages</h1>
           </div>
        </div>
        
     </div>
  </div>
</section>

<Package />

<Download_app />

<PackageTwo />

 <Footer />




</main>

    </>
  );
}

export default Packages;