import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Login() {
return (
<>
  <section className="pb-45 pt-45 p-relative border-style userForm">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          <form action='/'>
            <div className='card_book'>
              <div className='header-small'>
                <h1>Login</h1>
              </div>
              <div className='row justify-content-center mt-80 mb-40'>
                  <div className='col-lg-10'>                
              <div className='row'>
                <div className='col-lg-12 mt-30'>
                  <div className='sign__input'>
                    <input type='email' name='' className='from-control' placeholder='Enter your Email' />
                  </div>
                </div>
                <div className='col-lg-12 mt-30'>
                  <div className='sign__input'>
                    <input type='password' name='' className='from-control' placeholder='Enter your Password' />
                  </div>
                </div>


                <div className='col-lg-12 mt-50 text-center'>
                <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay" href="">Login</button>
                 <div className='text-center'>
                  <a href='#' className='title_user mt-30'>Forgot Password ?</a>
                  </div>
                </div>

                
                <div className='col-lg-12 mt-80 text-center'>
                <div className='text-center mb-30'>
                  <Link to='/signup' className='title_user mb-30'>New User ?</Link>
                  </div>
                  <Link className="w-btn w-btn-blue w-btn-blue-header btnpay" to='/signup'>Sign Up</Link>
                </div>

              </div>
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

export default Login;
