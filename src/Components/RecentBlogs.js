import React from "react" ;


function RecentBlogs() {
    return (
 <>

<section className="blog__area section_card recnt_blogs">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 section__title-5-p mb-15">Recent Blogs</h2>
                       
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://keanc.netlify.app/assets/img/blog-5.jpg" alt="" /> 
                           </a>
                        </div>
                        <div className="blog__content-5">
                          <h3 className="blog__title-5"><a href="#">Heading 1</a></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           {/* <a href="#" className="link-btn">View More <i className="arrow_right"></i> </a> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://keanc.netlify.app/assets/img/blog-8.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                          
                           <h3 className="blog__title-5"><a href="#">Heading 2</a></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           {/* <a href="#" className="link-btn">View More <i className="arrow_right"></i> </a> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://keanc.netlify.app/assets/img/blog-4.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                         
                           <h3 className="blog__title-5"><a href="#">Heading 3</a></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          {/* <a href="#" className="link-btn">View More <i className="arrow_right"></i> </a> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://keanc.netlify.app/assets/img/blog-4.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                         
                           <h3 className="blog__title-5"><a href="#">Heading 3</a></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          {/* <a href="#" className="link-btn">View More <i className="arrow_right"></i> </a> */}
                        </div>
                     </div>
                  </div>
                 
               </div>
            </div>
    </section>
  
      </>
    );
  }

export default RecentBlogs
