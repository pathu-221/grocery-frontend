
export async function requestWithToken(url: string, options?: RequestInit) {
    const token = localStorage.getItem('token');

    if (!token) return alert('no token');
    
    const res = await fetch(url, {
        ...options,
        headers: {
            ...options?.headers,
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}

export async function requestWithoutToken(url:string, options?: RequestInit) {
 
    const res = await fetch(url, options);
    const data = await res.json();
    return data;

    
}