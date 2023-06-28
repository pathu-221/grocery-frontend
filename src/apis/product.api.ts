import { requestWithoutToken } from "../helpers/httpRequests";

export async function fetchAllProducts() {
	const data = await requestWithoutToken(
		`${import.meta.env.VITE_API_ADDRESS}/product`
	);
	return data;
}

export async function fetchProductbyId(productId: string) {
	const data = await requestWithoutToken(
		`${import.meta.env.VITE_API_ADDRESS}/product/${productId}`
	);
	return data;
}
