import type { FC } from "react";
import { useState, useEffect } from "react";

import CheckoutBreadCrumbsLinks from "../components/CheckoutBreadCrumbsLinks";
import { useNavigate } from "react-router";
import { Order } from "../interfaces/order.interface";
import { fetchOrderDetails } from "../apis/order.api";

interface OrderCompletePageProps {}

const OrderCompletePage: FC<OrderCompletePageProps> = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const orderId = urlParams.get("orderId") || undefined;
	const navigate = useNavigate();

	const [orderDetails, setOrderDetails] = useState<Order>();

	useEffect(() => {
		if (!orderId) return navigate("/");
		loadOrderDetails();
	}, []);

	if (!orderId) return <></>;

	const loadOrderDetails = async () => {
		const data = await fetchOrderDetails(orderId);
		if (!data.status) alert(data.msg);

		setOrderDetails(data.data);
	};

	const formatOrderDate = (date: string) => {
		const formattedDate = new Date(date).toLocaleDateString("en-us", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
		return formattedDate;
	};

	return (
		<main className="main order">
			<div className="page-content pt-8 pb-10 mb-10">
				<CheckoutBreadCrumbsLinks />

				<div className="container mt-7">
					<div className="order-message">
						<div className="icon-box d-inline-flex align-items-center">
							<div className="icon-box-icon mb-0">
								<svg
									x="0px"
									y="0px"
									viewBox="0 0 50 50"
									enableBackground="new 0 0 50 50"
								>
									<g>
										<path
											fill="none"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="bevel"
											strokeMiterlimit="10"
											d="
                        											M33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4
                        											c0-0.7,0-1.4-0.1-2.1"
										></path>
										<polyline
											fill="none"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="bevel"
											strokeMiterlimit="10"
											points="
                        											48,6.9 24.4,29.8 17.2,22.3 	"
										></polyline>
									</g>
								</svg>
							</div>
							<h3 className="icon-box-title">
								Thank you. Your Order has been received.
							</h3>
						</div>
					</div>
					{orderDetails && (
						<div className="">
							<div className="row order-results cols-xl-6 cols-md-3 cols-sm-6  mt-10 pt-2 mb-4">
								<div className="overview-item">
									<span>Order number</span>
									<label>{orderDetails.id}</label>
								</div>
								<div className="overview-item">
									<span>Status</span>
									<label>Processing</label>
								</div>
								<div className="overview-item">
									<span>Date</span>
									<label>{formatOrderDate(orderDetails.created_at)}</label>
								</div>
								<div className="overview-item">
									<span>Email:</span>
									<label>{orderDetails.buyer.email}</label>
								</div>
								<div className="overview-item">
									<span>Total:</span>
									<label>${orderDetails.grand_total}</label>
								</div>
								<div className="overview-item">
									<span>Payment method:</span>
									<label>{orderDetails.payment_type}</label>
								</div>
							</div>
							<h2 className="detail-title mb-6">Order Details</h2>
							<div className="order-details">
								<table className="order-details-table">
									<thead>
										<tr className="summary-subtotal">
											<td>
												<h3 className="summary-subtitle">Your Order</h3>
											</td>
											<td></td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-subtitle">Product</td>
											<td></td>
										</tr>
										<tr>
											<td className="product-name">
												Juice{" "}
												<span>
													<i className="p-icon-times"></i> 1
												</span>
											</td>
											<td className="product-price">$129.99</td>
										</tr>
										{orderDetails.order_items.map((orderItem) => (
											<tr key={orderItem.id}>
												<td className="product-name">
													{orderItem.product.name}
													<span>
														<i className="p-icon-times"></i>{" "}
														{orderItem.product_quantity}
													</span>
												</td>
												<td className="product-price">
													${orderItem.product_price.toFixed(2)}
												</td>
											</tr>
										))}
										{/* <tr>
											<td className="product-name">
												Greenhouse Cherry{" "}
												<span>
													<i className="p-icon-times"></i>2
												</span>
											</td>
											<td className="product-price">$196.00</td>
										</tr> */}
										<tr className="summary-subtotal">
											<td>
												<h4 className="summary-subtitle">Subtotal:</h4>
											</td>
											<td className="summary-value font-weight-normal">
												${orderDetails.grand_total}
											</td>
										</tr>
										<tr className="summary-subtotal">
											<td>
												<h4 className="summary-subtitle">Payment method:</h4>
											</td>
											<td className="summary-value">
												{orderDetails.payment_type}
											</td>
										</tr>
										<tr className="summary-subtotal">
											<td>
												<h4 className="summary-subtitle">Total:</h4>
											</td>
											<td>
												<p className="summary-total-price">
													${orderDetails.grand_total}
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default OrderCompletePage;
