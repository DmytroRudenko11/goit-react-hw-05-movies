import axios from 'axios';

// const API_KEY = 'b5a186c9198f11a4b03fa25aa47ec067';

export async function GetTrends() {
  const URL =
    'https://api.themoviedb.org/3/trending/all/day?api_key=b5a186c9198f11a4b03fa25aa47ec067';
  try {
    const response = await axios.get(URL);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetByID(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=b5a186c9198f11a4b03fa25aa47ec067&language=en-US`;
  try {
    const response = await axios.get(URL);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
