import { requestWithToken } from "../helpers/httpRequests";

export async function fetchAllOrders() {
    const data = await requestWithToken(`${import.meta.env.VITE_API_ADDRESS}/orders`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    return data;
}