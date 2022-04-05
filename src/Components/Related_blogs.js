import React from "react" ;
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
loop:false,
margin:30,
autoplay:false,
lazyLoad : true,
autoplayTimeout:4000,
smartSpeed:700,
items:1,
navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
nav:false,
dots:true,
responsive:{
0:{
items:1
},
576:{
items:1
},
767:{
items:2
},
992:{
items:2.2
},
1200:{
items:2.4
},
1600:{
items:2.2
}
}
};

function Related_blogs() {
return (
<>

  <section className="reletd_blogs testimonial__slider border-style">
    <div className="container">
    <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5">Recent Blog</h2>                       
                     </div>
                  </div>
               </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          <OwlCarousel {...options}>
          
          <div className="blog_list">
           <div className="imgDiv">
            <a href="#">
            <img src='assets/images/service4.png' alt='blog img' /> 
            </a>  
            </div>   
            <div className="contentText">
            <h5>Cleanliness & Health </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <a href="#">Read More..</a>
            </div>
          </div>

          <div className="blog_list">
           <div className="imgDiv">
            <a href="#">
            <img src='assets/images/service4.png' alt='blog img' /> 
            </a>  
            </div>   
            <div className="contentText">
            <h5>Cleanliness & Health </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <a href="#">Read More..</a>
            </div>
          </div>

          <div className="blog_list">
           <div className="imgDiv">
            <a href="#">
            <img src='assets/images/service4.png' alt='blog img' /> 
            </a>  
            </div>   
            <div className="contentText">
            <h5>Cleanliness & Health </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <a href="#">Read More..</a>
            </div>
          </div>

          <div className="blog_list">
           <div className="imgDiv">
            <a href="#">
            <img src='assets/images/service4.png' alt='blog img' /> 
            </a>  
            </div>   
            <div className="contentText">
            <h5>Cleanliness & Health </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <a href="#">Read More..</a>
            </div>
          </div>

          <div className="blog_list">
           <div className="imgDiv">
            <a href="#">
            <img src='assets/images/service4.png' alt='blog img' /> 
            </a>  
            </div>   
            <div className="contentText">
            <h5>Cleanliness & Health </h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <a href="#">Read More..</a>
            </div>
          </div>


          </OwlCarousel>
        </div>
      </div>
    </div>
  </section>

</>
);
}

export default Related_blogs;
