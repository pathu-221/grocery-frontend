import { requestWithToken } from "../helpers/httpRequests";

export async function fetchAllOrders() {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/orders`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		}
	);
	return data;
}

export async function fetchOrderDetails(orderId: string) {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/orders/${orderId}`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		}
	);
	return data;
}
