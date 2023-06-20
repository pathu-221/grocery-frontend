import type { FC } from "react";

interface OrdersProps {}

const Orders: FC<OrdersProps> = () => {
	return (
		<div className="tab-pane" id="orders">
			<table className="order-table">
				<thead>
					<tr>
						<th>Order</th>
						<th>Date</th>
						<th>Status</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="order-number">
							<a href="#">#3596</a>
						</td>
						<td className="order-date">
							<span>September 23, 2021</span>
						</td>
						<td className="order-status">
							<span>On hold</span>
						</td>
						<td className="order-total">
							<span>$147.00 for 4 items</span>
						</td>
						<td className="order-action">
							<a
								href="#orders-view"
								className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
							>
								View
							</a>
						</td>
					</tr>
					<tr>
						<td className="order-number">
							<a href="#">#3593</a>
						</td>
						<td className="order-date">
							<span>February 21, 2021</span>
						</td>
						<td className="order-status">
							<span>On hold</span>
						</td>
						<td className="order-total">
							<span>$290.00 for 2 items</span>
						</td>
						<td className="order-action">
							<a
								href="#orders-view"
								className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
							>
								View
							</a>
						</td>
					</tr>
					<tr>
						<td className="order-number">
							<a href="#">#2547</a>
						</td>
						<td className="order-date">
							<span>January 4, 2021</span>
						</td>
						<td className="order-status">
							<span>On hold</span>
						</td>
						<td className="order-total">
							<span>$480.00 for 8 items</span>
						</td>
						<td className="order-action">
							<a
								href="#orders-view"
								className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
							>
								View
							</a>
						</td>
					</tr>
					<tr>
						<td className="order-number">
							<a href="#">#2549</a>
						</td>
						<td className="order-date">
							<span>January 19, 2021</span>
						</td>
						<td className="order-status">
							<span>On hold</span>
						</td>
						<td className="order-total">
							<span>$680.00 for 5 items</span>
						</td>
						<td className="order-action">
							<a
								href="#orders-view"
								className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
							>
								View
							</a>
						</td>
					</tr>
					<tr>
						<td className="order-number">
							<a href="#">#4523</a>
						</td>
						<td className="order-date">
							<span>Jun 6, 2021</span>
						</td>
						<td className="order-status">
							<span>On hold</span>
						</td>
						<td className="order-total">
							<span>$564.00 for 3 items</span>
						</td>
						<td className="order-action">
							<a
								href="#orders-view"
								className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
							>
								View
							</a>
						</td>
					</tr>
					<tr>
						<td className="order-number">
							<a href="#">#4526</a>
						</td>
						<td className="order-date">
							<span>Jun 19, 2021</span>
						</td>
						<td className="order-status">
							<span>On hold</span>
						</td>
						<td className="order-total">
							<span>$123.00 for 8 items</span>
						</td>
						<td className="order-action">
							<a
								href="#orders-view"
								className="btn btn-secondary btn-outline btn-block btn-rounded btn-sm"
							>
								View
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
