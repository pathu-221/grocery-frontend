import type { FC } from "react";

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = () => {
	return (
		<div className="mobile-menu-wrapper">
			<div className="mobile-menu-overlay"></div>
			<a className="mobile-menu-close" href="#">
				<i className="p-icon-times close-icon"></i>
			</a>
			<div className="mobile-menu-container scrollable">
				<ul className="mobile-menu mmenu-anim">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/shop">Shop</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
