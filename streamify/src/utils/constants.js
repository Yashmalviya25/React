export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E1Mzg4ZGYwMjUwNDA5Y2EwYWI4M2NlYWEzNWFkZiIsInN1YiI6IjY2MzRjYWY5MGY1MjY1MDEyYmJhZGE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPfKub26p6jygvjQMDFHPmindaxSiEzm2gZ6vXmuMAg",
  },
};

export const GET_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const GET_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const GET_MOVIE_TRAILER =
  "https://api.themoviedb.org/3/movie/{id}/videos?language=en-US";

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]
