import type { FC } from "react";
import CheckoutBreadCrumbsLinks from "../components/CheckoutBreadCrumbsLinks";
import CheckoutForm from "../components/CheckoutPage/CheckoutForm";

interface CheckoutPageProps {}

const CheckoutPage: FC<CheckoutPageProps> = () => {
	return (
		<main className="main checkout">
			<div className="page-content pt-8 pb-10 mb-4">
				<div className="step-by pr-4 pl-4">
					<CheckoutBreadCrumbsLinks />
				</div>
				<CheckoutForm />
			</div>
		</main>
	);
};

export default CheckoutPage;
