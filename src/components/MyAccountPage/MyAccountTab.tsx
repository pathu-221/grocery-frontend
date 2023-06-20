import type { FC } from "react";
import Dashboard from "./DashBoard";
import Orders from "./Orders";
import OrdersView from "./OrdersView";
import Downloads from "./Downloads";
import Addresses from "./Addresses";
import Account from "./Account";

interface MyAccountPageTabProps {}

const MyAccountPageTab: FC<MyAccountPageTabProps> = () => {
	return (
		<div className="tab tab-vertical gutter-lg">
			<ul className="nav nav-tabs mb-8 col-lg-3 col-md-4">
				<li className="nav-item">
					<a className="nav-link active" href="#dashboard">
						Dashboard
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#orders">
						Orders
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#downloads">
						Downloads
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#address">
						Addresses
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#account">
						Account details
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link no-tab-item" href="wishlist.html">
						Wishlist
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link no-tab-item" href="login.html">
						Logout
					</a>
				</li>
			</ul>
			<div className="tab-content col-lg-9 col-md-8">
				<Dashboard />
				<Orders />
                <OrdersView />
                <Downloads />
                <Addresses />
                <Account />
			</div>
		</div>
	);
};

export default MyAccountPageTab;
