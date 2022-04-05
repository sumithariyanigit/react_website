import React, { Component } from 'react';

function SendMessage() {
    return (
       <>
      
       <div className='card_book'>
              <div className='header-small'>
                <h1 className='text-inherit'>Send a message</h1>
              </div>
              <form>
              <div className='row justify-content-center mt-40 mb-10'>
                  <div className='col-lg-10'>                
              <div className='row'>
              <div className='col-lg-12 mt-20'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='Enter your Name' />
                  </div>
                </div>
                <div className='col-lg-12 mt-20'>
                  <div className='sign__input'>
                    <input type='email' name='' className='from-control' placeholder='Enter your Email' />
                  </div>
                </div>
                <div className='col-lg-12 mt-20'>
                  <div className='sign__input'>
                    <input type='number' name='' className='from-control' placeholder='Enter your Phone No.' />
                  </div>
                </div>
                <div className='col-lg-12 mt-20'>
                  <textarea name='' className='textarea textarea1' rows='4' placeholder='Enter Your Message'></textarea>
                </div>

                
                <div className='col-lg-12 mt-30 text-center'>
                  <button type="submit" class="w-btn w-btn-blue w-btn-blue-header btnpay mb-0" >Send</button>
                </div>

              </div>
              </div>
              </div>
              </form>

            </div>
      
       </>
  );
}

export default SendMessage;