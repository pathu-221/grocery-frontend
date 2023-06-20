

import type { FC } from 'react';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
    return (
			<div className="tab-pane active" id="dashboard">
				<p className="mb-0">
					Hello <span className="font-weight-bold text-secondary">John Doe</span>{" "}
					(not <span className="font-weight-bold text-secondary">John Doe</span>?{" "}
					<a href="login.html" className="text-primary">
						Log out
					</a>
					)
				</p>
				<p className="">
					From your account dashboard you can view your
					<a href="#orders" className="link-to-tab text-primary">
						recent orders
					</a>
					, manage your{" "}
					<a href="#address" className="link-to-tab text-primary">
						{" "}
						shipping and billing addresses
					</a>
					, and{" "}
					<a href="#account" className="link-to-tab text-primary">
						edit your password and account details
					</a>
					.
				</p>
				<div className="row cols-lg-3 cols-xs-2 cols-1 nav">
					<div className="ib-wrapper mb-4">
						<div className="icon-box text-center ib-border">
							<a href="#orders">
								<span className="icon-box-icon">
									<i className="p-icon-orders"></i>
								</span>
								<div className="icon-box-content">
									<p>ORDERS</p>
								</div>
							</a>
						</div>
					</div>
					<div className="ib-wrapper mb-4">
						<div className="icon-box text-center ib-border">
							<a href="#downloads">
								<span className="icon-box-icon">
									<i className="p-icon-download"></i>
								</span>
								<div className="icon-box-content">
									<p>DOWNLOADS</p>
								</div>
							</a>
						</div>
					</div>
					<div className="ib-wrapper mb-4">
						<div className="icon-box text-center ib-border">
							<a href="#address">
								<span className="icon-box-icon">
									<i className="p-icon-map"></i>
								</span>
								<div className="icon-box-content">
									<p>ADDRESSES</p>
								</div>
							</a>
						</div>
					</div>
					<div className="ib-wrapper mb-4">
						<div className="icon-box text-center ib-border">
							<a href="#account">
								<span className="icon-box-icon">
									<i className="p-icon-user-solid"></i>
								</span>
								<div className="icon-box-content">
									<p>ACCOUNT DETAILS</p>
								</div>
							</a>
						</div>
					</div>
					<div className="ib-wrapper mb-4">
						<div className="icon-box text-center ib-border">
							<a href="wishlist.html" className="no-tab-item">
								<span className="icon-box-icon">
									<i className="p-icon-heart-solid"></i>
								</span>
								<div className="icon-box-content">
									<p>WISHLIST</p>
								</div>
							</a>
						</div>
					</div>
					<div className="ib-wrapper mb-4">
						<div className="icon-box text-center ib-border">
							<a href="login.html" className="no-tab-item">
								<span className="icon-box-icon">
									<i className="p-icon-logout"></i>
								</span>
								<div className="icon-box-content">
									<p>LOGOUT</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Dashboard;
