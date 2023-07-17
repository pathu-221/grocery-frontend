import { requestWithToken } from "../helpers/httpRequests";

export async function placeOrder(addressId: string) {
    const data = await requestWithToken(
			`${import.meta.env.VITE_API_ADDRESS}/orders`,
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					addressId
				}),
			}
		);
    return data;
}