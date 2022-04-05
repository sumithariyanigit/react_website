import React from "react" ;



function Hero_section() {
    return (
 <>

<section className="hero__area hero__height p-relative d-flex align-items-center"> 
  
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-12 mt-70">
            <div className="hero__content pr-80 text-center">
               <h2 className="hero__title wow fadeInUp" data-wow-delay=".3s">Home services, on demand.</h2>
               {/* <p className="wow fadeInUp" data-wow-delay=".5s">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> */}
               <div className="hero__search wow fadeInUp " data-wow-delay=".7s">
                  <form action="#" className="fromstyle">
                   <span className="location_icon">
                   <i className="fad fa-location"></i>
                     <input type="search" placeholder="Your Location" className='w-200' />
                    </span>
                    <div className="d-inline">
                     <div className='join-from'>
                     <input type="text" placeholder="Search For Services" />
                       <button type="submit" className="w-btn w-btn-2"><i className="far fa-search"></i></button>
                     </div>
                     <div className="hero__search-info">
                     <span><a href="#"> Carpet Cleaning</a> </span>
                     <span><a href="#">Window Cleaning, House Cleaning</a> </span>

                  </div>
                     </div>
                  </form>
               
               </div>
            </div>
         </div>
         {/* <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="hero__thumb text-end ml-220">
               <div className="hero__thumb-wrapper p-relative ">
                  <img className="hero-circle" src="assets/img/hero/home-1/hero-circle.png" alt="" />

                  <div className="hero__thumb-shape shape-1">
                     <img src="assets/img/hero/home-1/hero-1.png" alt="" />
                  </div>
                  <div className="hero__thumb-shape shape-2">
                     <img src="assets/img/hero/home-1/hero-2.png" alt="" />
                  </div>
                  <div className="hero__thumb-shape shape-3">
                     <img src="assets/img/hero/home-1/hero-3.png" alt=""b/>
                  </div>
                  <div className="hero__thumb-shape shape-4">
                     <img src="assets/img/hero/home-1/hero-4.png" alt="" />
                  </div>
                  <div className="hero__thumb-shape shape-5">
                     <img src="assets/img/hero/home-1/hero-5.png" alt="" />
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   </div>
</section>
  
      </>
    );
  }

export default Hero_section
