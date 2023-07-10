import { requestWithoutToken } from "../helpers/httpRequests";

export async function fetchAllCategories() {
    const data = await requestWithoutToken(`${import.meta.env.VITE_API_ADDRESS}/categories`);

    return data;
}