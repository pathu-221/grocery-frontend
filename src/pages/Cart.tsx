import type { FC } from "react";
import CartProducts from "../components/CartPage/CartProducts";

interface CartPageProps {}

const CartPage: FC<CartPageProps> = () => {
	return (
		<main className="main cart">
			<div className="page-content pt-8 pb-10 mb-4">
				<div className="step-by">
					<h3 className="title title-step active">
						<a href="cart">1.Shopping Cart</a>
					</h3>
					<h3 className="title title-step">
						<a href="checkout.html">2.Checkout</a>
					</h3>
					<h3 className="title title-step">
						<a href="order.html">3.Order Complete</a>
					</h3>
                </div>
                <CartProducts />
			</div>
		</main>
	);
};

export default CartPage;
