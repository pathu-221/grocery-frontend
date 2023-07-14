import type { FC } from "react";
import LoginAndRegister from "./LoginAndRegisterOffCanvas";
import CartDropDown from "./CartDropdown";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {

	const navigate = useNavigate();


	return (
		<div>
			<div className="header-middle has-center sticky-header fix-top sticky-content">
				<div className="container">
					{/** navbar logo */}
					<div className="header-left">
						<a href="#" className="mobile-menu-toggle" title="Mobile Menu">
							<i className="p-icon-bars-solid"></i>
						</a>
						<a href="demo1.html" className="logo">
							<img src="images/logo.png" alt="logo" width="171" height="41" />
						</a>
						{/* <!-- End of Divider --> */}
					</div>
					<div className="header-center">
						<nav className="main-nav">
							<ul className="menu">
								<li
									onClick={() => {
										navigate("/");
										window.location.reload();
									}}
									className={`${location.pathname === "/" && "active"}`}
								>
									<Link to="/">Home</Link>
								</li>
								<li
									onClick={() => {
										navigate("/shop");
										window.location.reload();
									}}
									className={`${location.pathname === "/shop" && "active"}`}
								>
									<Link to="/shop">Shop</Link>
								</li>
								<li>
									<a href="#">Products</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="header-right">
						{/** search bar */}
						{/* <div className="header-search hs-toggle">
							<a className="search-toggle" href="#" title="Search">
								<i className="p-icon-search-solid"></i>
							</a>
							<form action="#" className="form-simple">
								<input
									type="search"
									autoComplete="off"
									placeholder="Search in..."
									required
								/>
								<button className="btn btn-search" type="submit">
									<i className="p-icon-search-solid"></i>
								</button>
							</form>
						</div> */}
						<LoginAndRegister /> {/** incomplete */}
						{/* <a href="#" className="wishlist wishlist-toggle" title="Wishlist">
							<i className="p-icon-heart-solid"></i>
						</a> */}
						<CartDropDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
