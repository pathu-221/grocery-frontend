import type { FC } from "react";

interface LoginAndRegisterProps {}

const LoginAndRegister: FC<LoginAndRegisterProps> = () => {
	return (
		<div className="dropdown login-dropdown off-canvas">
			<a
				className="login-toggle"
				href="ajax/login.html"
				data-toggle="login-modal"
			>
				<span className="sr-only">login</span>
				<i className="p-icon-user-solid"></i>
			</a>
			<div className="canvas-overlay"></div>
			<a href="#" className="btn-close"></a>
			<div className="dropdown-box scrollable">
				<div className="login-popup">
					<div className="form-box">
						<div className="tab tab-nav-underline tab-nav-boxed">
							<ul className="nav nav-tabs nav-fill mb-4">
								<li className="nav-item">
									<a className="nav-link active lh-1 ls-normal" href="#signin">
										Login
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link lh-1 ls-normal" href="#register">
										Register
									</a>
								</li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane active" id="signin">
									<form action="#">
										<div className="form-group">
											<input
												type="text"
												id="singin-email"
												name="singin-email"
												placeholder="Username or Email Address"
												required
											/>
											<input
												type="password"
												id="singin-password"
												name="singin-password"
												placeholder="Password"
												required
											/>
										</div>
										<div className="form-footer">
											<div className="form-checkbox">
												<input
													type="checkbox"
													id="signin-remember"
													name="signin-remember"
												/>
												<label htmlFor="signin-remember">Remember me</label>
											</div>
											<a href="#" className="lost-link">
												Lost your password?
											</a>
										</div>
										<button className="btn btn-dark btn-block" type="submit">
											Login
										</button>
									</form>
									<div className="form-choice text-center">
										<label>or Login With</label>
										<div className="social-links social-link-active ">
											<a
												href="#"
												title="Facebook"
												className="social-link social-facebook fab fa-facebook-f"
											></a>
											<a
												href="#"
												title="Twitter"
												className="social-link social-twitter fab fa-twitter"
											></a>
											<a
												href="#"
												title="Linkedin"
												className="social-link social-linkedin fab fa-linkedin-in"
											></a>
										</div>
									</div>
								</div>
								<div className="tab-pane" id="register">
									<form action="#">
										<div className="form-group">
											<input
												type="text"
												id="register-user"
												name="register-user"
												placeholder="Username"
												required
											/>
											<input
												type="email"
												id="register-email"
												name="register-email"
												placeholder="Your Email Address"
												required
											/>
											<input
												type="password"
												id="register-password"
												name="register-password"
												placeholder="Password"
												required
											/>
										</div>
										<div className="form-footer mb-5">
											<div className="form-checkbox">
												<input
													type="checkbox"
													id="register-agree"
													name="register-agree"
													required
												/>
												<label htmlFor="register-agree">
													I agree to the privacy policy
												</label>
											</div>
										</div>
										<button className="btn btn-dark btn-block" type="submit">
											Register
										</button>
									</form>
									<div className="form-choice text-center">
										<label className="ls-m">or Register With</label>
										<div className="social-links social-link-active ">
											<a
												href="#"
												title="Facebook"
												className="social-link social-facebook fab fa-facebook-f"
											></a>
											<a
												href="#"
												title="Twitter"
												className="social-link social-twitter fab fa-twitter"
											></a>
											<a
												href="#"
												title="Linkedin"
												className="social-link social-linkedin fab fa-linkedin-in"
											></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button title="Close (Esc)" type="button" className="mfp-close">
						<span>×</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginAndRegister;
