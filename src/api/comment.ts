
export const getListStatusAPI = async () => {
    const response = await fetch('http://localhost:8082/comment/all');
    return response.json();
};