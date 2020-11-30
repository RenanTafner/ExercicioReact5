export const ADD_FAVORITE_MOVIE = "FAVORITE_MOVIE";


export const addFavoriteMovie = movie => ({
  type: ADD_FAVORITE_MOVIE,
  payload: movie
});
