import { requestWithToken } from "../helpers/httpRequests";


export async function fetchAllAddresses() {
    const data = await requestWithToken(`${import.meta.env.VITE_API_ADDRESS}/address`);
    return data;
}