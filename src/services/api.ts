const API_KEY = "14ef186cb6bc4c9052e65a31f4553101";
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
    const data = await response.json();

    return data.results;
}

export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    console.log(query)
    const data = await response.json();
    console.log(data.results);
    return data.results;
}