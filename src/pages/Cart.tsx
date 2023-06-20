import type { FC } from "react";
import CartProducts from "../components/CartPage/CartProducts";
import CheckoutBreadCrumbsLinks from "../components/CheckoutBreadCrumbsLinks";

interface CartPageProps {}

const CartPage: FC<CartPageProps> = () => {
	return (
		<main className="main cart">
			<div className="page-content pt-8 pb-10 mb-4">
				<div className="step-by">
					<CheckoutBreadCrumbsLinks />
				</div>
				<CartProducts />
			</div>
		</main>
	);
};

export default CartPage;
