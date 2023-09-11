export function getImgeUrl(image: string) {
	return `${import.meta.env.VITE_API_ADDRESS}/${image}`;
}
