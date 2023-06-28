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
					addressId: "5fcb6e70-2cbb-4d97-973c-ffb8f3c92154",
				}),
			}
    );
    return data;
}