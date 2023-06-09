import axios from 'axios';

// const API_KEY = 'b5a186c9198f11a4b03fa25aa47ec067';

export async function GetTrends() {
  const URL =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=b5a186c9198f11a4b03fa25aa47ec067';
  try {
    const response = await axios.get(URL);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function GetMoviesByName(keyword) {
  const URL = `
https://api.themoviedb.org/3/search/movie?api_key=b5a186c9198f11a4b03fa25aa47ec067&language=en-US&query=${keyword}&page=1&include_adult=false`;
  try {
    const response = await axios.get(URL);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function MovieByID(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=b5a186c9198f11a4b03fa25aa47ec067&language=en-US`;
  try {
    const response = await axios.get(URL);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function CastByID(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b5a186c9198f11a4b03fa25aa47ec067&language=en-US`;

  try {
    const response = await axios.get(URL);
    const data = await response.data.cast;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function ReviewsByID(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b5a186c9198f11a4b03fa25aa47ec067&language=en-US&page=1`;

  try {
    const response = await axios.get(URL);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
