

export const getListStatusAPI = async () => {
    const response = await fetch('http://localhost:8082/status/all');

    return response.json();
};
