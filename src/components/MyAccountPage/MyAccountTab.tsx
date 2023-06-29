import type { FC } from "react";
import { useEffect, useState } from "react";
import Dashboard from "./DashBoard";
import Orders from "./Orders";
import OrdersView from "./OrdersView";
import Addresses from "./Addresses";
import Account from "./Account";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Order } from "../../interfaces/order.interface";
import { fetchAllOrders } from "../../apis/order.api";

interface MyAccountPageTabProps {}

const MyAccountPageTab: FC<MyAccountPageTabProps> = () => {
	const user = useSelector((state: RootState) => state.user.user);
	const [orderToView, setOrderToView] = useState<Order>();

	const [orders, setOrders] = useState<Order[]>();

	useEffect(() => {
		loadOrders();
	}, []);

	const loadOrders = async () => {
		const data = await fetchAllOrders();
		if (!data.status) alert(data.msg);

		setOrders(data.data);
	};

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
					<a className="nav-link" href="#address">
						Addresses
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link no-tab-item" href="login.html">
						Logout
					</a>
				</li>
			</ul>
			<div className="tab-content col-lg-9 col-md-8">
				{user && (
					<>
						<Dashboard user={user} />
						{/* <Orders onClick={(order: Order) => {
							setOrderToView(order);
						}} /> */}
						{orderToView ? (
							<OrdersView
								back={() => setOrderToView(undefined)}
								order={orderToView}
							/>
						) : (
							orders && (
								<Orders
									orders={orders}
									onClick={(order: Order) => {
										setOrderToView(order);
										loadOrders();
									}}
								/>
							)
						)}
						<Addresses />
						<Account />
					</>
				)}
			</div>
		</div>
	);
};

export default MyAccountPageTab;
