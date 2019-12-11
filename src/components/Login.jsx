import React from 'react';
import './styles/login-v1.css';

function Login() {
  return (
    <div className="kt-login-v1__body">
			{/*<!--begin::Section-->*/}
			<div className="kt-login-v1__section">
				<div className="kt-login-v1__info">
					<h3 className="kt-login-v1__intro">Whatever CTA's wave purpose important exit element</h3>
					<p>Lorem ipsum lian amet estudiat</p>
				</div>
			</div>
			{/*<!--begin::Section-->*/}

			{/*<!--begin::Separator-->*/}
			<div className="kt-login-v1__seaprator"></div>
			{/*<!--end::Separator-->*/}
    <div className="kt-login-v1__wrapper">
  				<div className="kt-login-v1__container">
  					<h3 className="kt-login-v1__title">
  						Sign To Account
  					</h3>
  					{/*<!--begin::Form-->*/}
  					<form className="kt-login-v1__form kt-form" action="" autoComplete="off">
  						<div className="form-group">
  							<input className="form-control" type="text" placeholder="Username"
                 name="username" autoComplete="off">
                </input>
  						</div>
  						<div className="form-group">
  							<input className="form-control" type="password"
                placeholder="Password" name="password" autoComplete="off">
                </input>
  						</div>

  						<div className="kt-login-v1__actions">
  							<a href="#" className="kt-login-v1__forgot">
  								Forgot Password ?
  							</a>
  							<button type="submit" className="btn btn-pill btn-elevate">Sign In</button>
  						</div>
  					</form>
  					{/*<!--end::Form-->*/}

  					{/*<!--begin::Divider-->*/}
  					<div className="kt-login-v1__divider">
  						<div className="kt-divider">
  							<span></span>
  							<span>OR</span>
  							<span></span>
  						</div>
  					</div>
          {/*<!--end::Divider--*/}

  					{/*<!--begin::Options-->*/}
  					<div className="kt-login-v1__options">
  						<a href="#" className="btn">
  							<i className="fab fa-facebook-f"></i>
  							Fcebook
  						</a>
  						<a href="#" className="btn">
  							<i className="fab fa-twitter"></i>
  							Twitter
  						</a>
  						<a href="#" className="btn">
  							<i className="fab fa-google"></i>
  							Google
  						</a>
  					</div>
  					{/*<!--end::Options-->*/}
  				</div>
  			</div>
      </div>
 );
}

export default Login;
