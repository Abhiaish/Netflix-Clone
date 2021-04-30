const API_key='944b8148da9cd34b86f31dc90b661468';

const request ={
    fetchTrending :`/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`
}

export default request;