const API_KEY = "f1f257225940af420ceb36a528db07fb";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetch,
};

export default requests;
