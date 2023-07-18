import { requestWithToken } from "../helpers/httpRequests";


export async function fetchAllAddresses() {
    const data = await requestWithToken(`${import.meta.env.VITE_API_ADDRESS}/address`);
    return data;
}

export async function addAddress(formData: any) {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/address`,
		{
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formData),
		}
	);
	return data;
}

export async function editAddress(addressId: string, formData: any) {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/address/${addressId}`,
		{
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formData),
		}
	);
	return data;
}