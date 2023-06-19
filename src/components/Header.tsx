

import type { FC } from 'react';
import Navbar from './Navbar';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
			<header className="header">
				<div className="header-top">
					<div className="container">
					<div className="header-left">
						{/** phone number */}
							<a href="tel:#" className="call">
								<i className="p-icon-phone-solid"></i>
								<span>+456 789 000</span>
							</a>
						<span className="divider"></span>
						{/** address */}
							<a href="contact.html" className="contact">
								<i className="p-icon-map"></i>
								<span>25 West 21th STREET, Miami FL, USA</span>
							</a>
						</div>
					<div className="header-right">
						{/** currency */}
							<div className="dropdown switcher">
								<a href="#currency">USD</a>
								<ul className="dropdown-box">
									<li>
										<a href="#USD">USD</a>
									</li>
									<li>
										<a href="#EUR">EUR</a>
									</li>
								</ul>
							</div>
							{/* <!-- End DropDown Menu --> */}
							<div className="dropdown switcher">
								<a href="#language">
									<img
										src="images/flagus.jpg"
										width="14"
										height="10"
										className="mr-1"
										alt="flagus"
									/>
									ENG
								</a>
								<ul className="dropdown-box">
									<li>
										<a href="#USD">
											<img
												src={"./images/flagus.jpg"}
												width="14"
												height="10"
												className="mr-1"
												alt="flagus"
											/>
											ENG
										</a>
									</li>
									<li>
										<a href="#EUR">
											<img
												src="./images/flagfr.jpg"
												width="14"
												height="10"
												className="mr-1"
												alt="flagfr"
											/>
											FRH
										</a>
									</li>
								</ul>
							</div>
							<span className="divider"></span>
							{/* <!-- End DropDown Menu --> */}
							<div className="social-links">
								<a
									href="#"
									className="social-link fab fa-facebook-f"
									title="Facebook"
								></a>
								<a
									href="#"
									className="social-link fab fa-twitter"
									title="Twitter"
								></a>
								<a
									href="#"
									className="social-link fab fa-pinterest"
									title="Pinterest"
								></a>
								<a
									href="#"
									className="social-link fab fa-linkedin-in"
									title="Linkedin"
								></a>
							</div>
							{/* <!-- End of Social Links --> */}
						</div>
					</div>
			</div>
			<Navbar />
			</header>
		);
}

export default Header;
