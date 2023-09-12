import { requestWithToken, requestWithoutToken } from "../helpers/httpRequests";

export async function addReview(formData: any) {
	const response = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/review`,
		{
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formData),
		}
	);
	return response;
}

export async function fetchAllreviews(productId: string) {
	const response = await requestWithoutToken(
		`${import.meta.env.VITE_API_ADDRESS}/review/?productId=${productId}`
	);
	return response;
}
