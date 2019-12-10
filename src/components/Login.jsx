import React from 'react';


function Login() {
  <div class="kt-login-v1__wrapper">
				<div class="kt-login-v1__container">
					<h3 class="kt-login-v1__title">
						Sign To Account
					</h3>
					{/*<!--begin::Form-->*/}
					<form class="kt-login-v1__form kt-form" action="" autocomplete="off">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Username" name="username" autocomplete="off">
              </input>
						</div>
						<div class="form-group">
							<input class="form-control" type="password" placeholder="Password" name="password" autocomplete="off">
              </input>
						</div>

						<div class="kt-login-v1__actions">
							<a href="#" class="kt-login-v1__forgot">
								Forgot Password ?
							</a>
							<button type="submit" class="btn btn-pill btn-elevate">Sign In</button>
						</div>
					</form>
					{/*<!--end::Form-->*/}

					{/*<!--begin::Divider-->*/}
					<div class="kt-login-v1__divider">
						<div class="kt-divider">
							<span></span>
							<span>OR</span>
							<span></span>
						</div>
					</div>
        {/*<!--end::Divider--*/}

					{/*<!--begin::Options-->*/}
					<div class="kt-login-v1__options">
						<a href="#" class="btn">
							<i class="fab fa-facebook-f"></i>
							Fcebook
						</a>
						<a href="#" class="btn">
							<i class="fab fa-twitter"></i>
							Twitter
						</a>
						<a href="#" class="btn">
							<i class="fab fa-google"></i>
							Google
						</a>
					</div>
					{/*<!--end::Options-->*/}
				</div>
			</div>

export default Login
