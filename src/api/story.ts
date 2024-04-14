
export const getListStoryAPI = async () => {
    const response = await fetch('http://localhost:8082/story/all');

    return response.json();
};
