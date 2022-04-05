import React from "react" ;



function FeaturedCategory() {
return (
<>


  <section className="blog__area section_card ">

    <div className="container pb-60">
      <div className="row">
        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
          <div className="section__title-wrapper section__title-wrapper-5 text-center mb-0 wow fadeInUp" data-wow-delay=".3s">
            <h2 className="section__title-5 section__title-5-p mb-15">Featured Categories</h2>
            <p className="mb-0">Lorem Ipsum is simply dummy</p>
          </div>
        </div>
      </div>
      <div className="process-items">
        <div className="row justi-style">
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/dustbin.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/cleanig.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/wosh.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/toilet.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
          <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/homecleaning.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
          <div className="single-item col-lg-2 col-md-6">
            <a href="#" className="item">
              <div className="thumb">
                 <div className="img-thumb">
                 <img src={process.env.PUBLIC_URL + '/assets/images/office.png'} alt=""  /> 
                 </div>
                 <h5>House Cleaning</h5>
               
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
);
}

export default FeaturedCategory
