export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
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

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
