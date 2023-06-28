import { requestWithToken } from "../helpers/httpRequests";

export async function addItemToCart(productId: string) {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/cart`,
		{
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ product_id: productId, quantity: 1 }),
		}
	);
	return data;
}

export async function fetchAllCartItems() {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/cart`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		}
	);
	return data;
}
