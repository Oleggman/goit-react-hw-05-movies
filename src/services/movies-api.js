import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const fetchTrending = async () => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: 'bc8bedeb0e6d632b70f1bff9aa069a85'
  });
  const { data } = await axios.get(`/3/trending/all/day?${params}`);
  return data;
}

const fetchMovie = async movie => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: 'bc8bedeb0e6d632b70f1bff9aa069a85',
    include_adult: false,
    query: movie,
    page: 1
  });
  const { data } = await axios.get(`/3/search/movie?${params}`);
  return data;
}

const fetchMovieDetails = async id => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: 'bc8bedeb0e6d632b70f1bff9aa069a85',
  });
  const { data } = await axios.get(`/3/movie/${id}?${params}`);
  return data;
}

const fetchMovieCast = async id => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: 'bc8bedeb0e6d632b70f1bff9aa069a85',
  });
  const { data } = await axios.get(`/3/movie/${id}/credits?${params}`);
  return data;
}

const fetchMovieReviews = async id => {
  const params = new URLSearchParams({
    language: "en-US",
    api_key: 'bc8bedeb0e6d632b70f1bff9aa069a85',
    page: 1
  });
  const { data } = await axios.get(`/3/movie/${id}/reviews?${params}`);
  return data;
}

export {
  fetchTrending,
  fetchMovie,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews
};