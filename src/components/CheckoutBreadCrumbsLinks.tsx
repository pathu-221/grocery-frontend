import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CheckoutBreadCrumbsLinksProps {}

const CheckoutBreadCrumbsLinks: FC<CheckoutBreadCrumbsLinksProps> = () => {

    const location = useLocation();

    return (
			<div className="step-by pr-4 pl-4">
				<h3
					className={`title title-step ${
						location.pathname === "/cart" ? "active" : ""
					}`}
				>
					<Link to={"/cart"}>1.Shopping Cart</Link>
				</h3>
				<h3
					className={`title title-step ${
						location.pathname === "/checkout" ? "active" : ""
					}`}
				>
					<Link to={"/checkout"}>2.Checkout</Link>
				</h3>
				<h3
					className={`title title-step ${
						location.pathname === "/orderComplete" ? "active" : ""
					}`}
				>
					<Link to={"/orderComplete"}>2.Order complete</Link>
				</h3>
			</div>
		);
}

export default CheckoutBreadCrumbsLinks;
