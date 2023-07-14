import { requestWithToken } from "../helpers/httpRequests";

export async function placeOrder() {
    const data = await requestWithToken(
			`${import.meta.env.VITE_API_ADDRESS}/orders`,
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					addressId: "e2bf60c5-0835-49e6-8a0b-3a094007b10e",
				}),
			}
		);
    return data;
}