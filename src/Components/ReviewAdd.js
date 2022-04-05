import React from "react" ;
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

function ReviewAdd() {
    return (
        <>
        <form>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                 <div className='review_add mt-20'>
                    <div className="mb-20">
                     <h5 className="mr-10">What is your rating?</h5>
                     <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={30}
                            isHalf={true}
                            emptyIcon={<i class="far fa-star"></i>}
                            halfIcon={<i class="fas fa-star-half-alt"></i>}
                            fullIcon={<i class="far fa-star"></i>}
                            activeColor="#ffd700">
                    </ReactStars>
                              </div>
                            <input type="email" className='form-control' placeholder='Enter your email' style={{border:'none', height:'45px'}} />
                              <textarea name="" className="textarea textarea1 mt-20" rows='4' placeholder="Your Review"></textarea>
                              <div className="text-center">
                              <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay" style={{width : '50%'}}>Submit</button>
                              </div>
                             
                    </div>
                    </div>
                    </div>

                   

                    </form>
        </>
);
}

export default ReviewAdd