import { requestWithToken, requestWithoutToken } from "../helpers/httpRequests";

export async function login(formData: any) {
    const data = await requestWithoutToken(`${import.meta.env.VITE_API_ADDRESS}/auth/login`, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(formData)
    });
    return data;
}

export async function register(formData: any) {
    const data = await requestWithoutToken(`${import.meta.env.VITE_API_ADDRESS}/auth/register`, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(formData)
    });
    return data;
}

export async function authenticate() {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/auth`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		}
	);
	return data;
}