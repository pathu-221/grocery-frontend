import { requestWithToken } from "../helpers/httpRequests";


export async function updateUser(formData: any) {
    const data = await requestWithToken(`${import.meta.env.VITE_API_ADDRESS}/user`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    return data;
}

export async function updateUserPassword(formData: any) {
	const data = await requestWithToken(
		`${import.meta.env.VITE_API_ADDRESS}/user/password`,
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