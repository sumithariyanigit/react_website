import React,  { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";
import Related_blogs from './Components/Related_blogs';
import Download_app from './Components/Download_app';

function Blogs() {
return (
    <>
<Header />
  
<main>
     
<section className="hero__banner p-relative d-flex align-items-center"> 
  <div className="container">
     <div className="row align-items-center">
        <div className="col-lg-12 mt-70">
           <div className="hero__content pr-80 text-center">
            <h1 className='text-white'>Blog</h1>
           </div>
        </div>
        
     </div>
  </div>
</section>


<section className="about__area pb-45 pt-45 p-relative border-style">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-7 order-last">
                     <div className="about__wrapper about__wrapper-2 mb-20">
                        <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title">Cleanliness & Health</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into
                                 electronic typesetting, remaining essentially unchanged. It was popularised 
                                 in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                 and more recently with desktop publishing software like Aldus PageMaker including 
                                 versions of Lorem Ipsum.
                               Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </p>
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Lorem Ipsum is not simply random text. It has roots in a piece of classical  making it over 2000 years old. Richard McClintock, </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 wow fadeInRight order-lg-first text-center" data-wow-delay=".7s">
                     <div className="about__thumb-wrapper-2 p-relative m-img">
                        <img src="assets/images/service3.png " alt="" /> 
                     </div>
                  </div>
               </div>
            </div>
</section>  

<Download_app />

   
   <Related_blogs />
     
   <Footer />




</main>

    </>
  );
}

export default Blogs;