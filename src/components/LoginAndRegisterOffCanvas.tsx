import { FC, useState, ChangeEvent, FormEvent } from "react";
import { login, register } from "../apis/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/user/userSlice";
import { RootState } from "../redux/store";
import showToast from "../helpers/showToast";

interface LoginAndRegisterProps {}

const LoginAndRegister: FC<LoginAndRegisterProps> = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user.user);
	const [formValue, setFormValue] = useState({ email: "", password: "" });
	const [registerFormValue, setRegisterFormValue] = useState({
		first_name: "",
		last_name: "",
		user_name: "",
		email: "",
		password: "",
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const data = await login(formValue);

		if (!data.status) return showToast('error', data.msg);

		showToast('success', data.msg);
		dispatch(addUser(data.data.user));

	};

	const onRegisterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRegisterFormValue({
			...registerFormValue,
			[e.target.name]: e.target.value,
		});
	};

	const registerFormSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const data = await register(registerFormValue);
		console.log(data, registerFormValue);
	};

	return (
		<div className="dropdown login-dropdown off-canvas">
			<a
				className="login-toggle d-flex flex-column"
				href="ajax/login.html"
				data-toggle="login-modal"
			>
				<span className="sr-only">login</span>
				<i className="p-icon-user-solid"></i>
				{user && <span>{user.user_name}</span>}
			</a>
			{!user && (
				<>
					<div className="canvas-overlay"></div>
					<a href="#" className="btn-close"></a>
					<div className="dropdown-box scrollable">
						<div className="login-popup">
							<div className="form-box">
								<div className="tab tab-nav-underline tab-nav-boxed">
									<ul className="nav nav-tabs nav-fill mb-4">
										<li className="nav-item">
											<a
												className="nav-link active lh-1 ls-normal"
												href="#signin"
											>
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
											<form onSubmit={onSubmit} action="#">
												<div className="form-group">
													<input
														type="text"
														id="singin-email"
														name="email"
														placeholder="Email Address"
														onChange={onChange}
														required
													/>
													<input
														type="password"
														id="singin-password"
														name="password"
														placeholder="Password"
														onChange={onChange}
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
												<button
													className="btn btn-dark btn-block"
													type="submit"
												>
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
											<form onSubmit={registerFormSubmit}>
												<div className="form-group">
													<input
														type="text"
														id="register-user"
														name="first_name"
														placeholder="First name"
														required
														onChange={onRegisterInputChange}
													/>
													<input
														type="text"
														id="register-user"
														name="last_name"
														placeholder="Last Name"
														onChange={onRegisterInputChange}
														required
													/>
													<input
														type="email"
														id="register-email"
														name="email"
														placeholder="Your Email Address"
														onChange={onRegisterInputChange}
														required
													/>
													<input
														type="text"
														id="register-user"
														name="user_name"
														placeholder="Username"
														onChange={onRegisterInputChange}
														required
													/>
													<input
														type="password"
														id="register-password"
														name="password"
														placeholder="Password"
														onChange={onRegisterInputChange}
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
												<button
													className="btn btn-dark btn-block"
													type="submit"
												>
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
				</>
			)}
		</div>
	);
};

export default LoginAndRegister;
