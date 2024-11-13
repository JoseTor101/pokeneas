export async function fetchFullPokenea() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/full`);
    const data = await response.json(); 
    return data;
}

export async function fetchRawPokenea() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/raw`);
    const data = await response.json(); 
    return data;
}

export async function fetchAllPokeneas() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/all`);
    const data = await response.json(); 
    return data;
}
