export async function apiFetch(url, options) {
    const token = localStorage.getItem('token');
    const headers = { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    };

    try {
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('API Fetch error:', error);
        throw error;
    }
};

