import type { FC } from "react";

interface AddressesProps {}

const Addresses: FC<AddressesProps> = () => {
	return (
		<div className="tab-pane" id="address">
			<p>
				The following addresses will be used on the checkout page by default.
			</p>
			<div className="row">
				<div className="col-sm-6 mb-4">
					<div className="card card-address">
						<div className="card-body">
							<h5 className="card-title lh-2 mb-2">Billing Address</h5>
							<p>
								John Doe
								<br />
								Panda Company
								<br />
								Steven street
								<br />
								El Carjon, CA 92020
							</p>
							<a href="#" className="btn btn-link btn-primary btn-underline">
								Edit your billing address
								<i className="p-icon-arrow-long-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6 mb-4">
					<div className="card card-address">
						<div className="card-body">
							<h5 className="card-title lh-2 mb-2">Shipping Address</h5>
							<p>You have not set up this type of address yet.</p>
							<a href="#" className="btn btn-link btn-primary btn-underline">
								Add <i className="p-icon-arrow-long-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Addresses;
