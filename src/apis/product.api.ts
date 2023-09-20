import { requestWithoutToken } from "../helpers/httpRequests";

export async function fetchAllProducts(
	category = "",
	sortBy?: string,
	perPage = 12,
	page = 1
) {
	const data = await requestWithoutToken(
		`${
			import.meta.env.VITE_API_ADDRESS
		}/product/?category=${category}&sortBy=${sortBy}&perPage=${perPage}&page=${page}`
	);
	return data;
}

export async function fetchFeaturedProducts() {
	const data = await requestWithoutToken(
		`${import.meta.env.VITE_API_ADDRESS}/product/featured`
	);
	return data;
}

export async function fetchProductbyId(productId: string) {
	const data = await requestWithoutToken(
		`${import.meta.env.VITE_API_ADDRESS}/product/${productId}`
	);
	return data;
}
