
export const getListSpecializationAPI = async () => {
    const response = await fetch('http://localhost:8082/specialization/all');
    return response.json();
};