import React from 'react';
import { Outlet, Link } from "react-router-dom";

function SignUp() {
return (
<>
  <section className="pb-45 pt-45 p-relative border-style userForm">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          <form action='/'>
            <div className='card_book'>
              <div className='header-small'>
                <h1>Sign Up</h1>
              </div>             
              <div className='row mt-60 mb-40'>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='Name' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='email' name='' className='from-control' placeholder='E-mail' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='password' name='' className='from-control' placeholder='Password' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='password' name='' className='from-control' placeholder='Confirm Password' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='number' name='' className='from-control' placeholder='Phone No.' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                  <select name='' id=''>
                      <option value='IND'>India</option>
                  </select>
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='Region' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='City' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='Area' />
                  </div>
                </div>

                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='Zip Code' />
                  </div>
                </div>
                <div className='col-lg-12 mt-30'>
                  <textarea name='' className='textarea' rows='5' placeholder='Building name, House number'></textarea>
                </div>

                


                <div className='col-lg-12 mt-50 text-center'>
                <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay" href="">Sign Up</button>
                </div>

                
                <div className='col-lg-12 mt-50 text-center'>
                <div className='text-center mb-10'>
                  <a href='#' className='title_user mb-0 fntw500'>Already Have An Account</a>
                  </div>
                  <Link className="w-btn w-btn-blue w-btn-blue-header btnpay mb-0" to='/login'>Login</Link>
                </div>

              </div>
             

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>
);
}

export default SignUp;
