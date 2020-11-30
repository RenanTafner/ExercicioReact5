import {
    ADD_FAVORITE_MOVIE,
  } from "../actions/favoriteMovieActions";
  
  // ESTADO INICIAL
  const initialState = {
    favoriteMovies : []
  };
  
  export const favoriteMovies = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE_MOVIE:
      var movie = action.payload;

      if(state.favoriteMovies.includes(movie.title)){
        alert('Movie already added to Favorite Movies List! Impossible to add it again.');
        return {
          ...state,
          favoriteMovies: state.favoriteMovies
      };
    }else{

      var favoriteMoviesAux = state.favoriteMovies.concat(movie.title);
      alert('Movie added to Favorite Movies List successfully.');
      return {
        ...state,
        favoriteMovies: favoriteMoviesAux
      };

    }
      default:
        return state;
    }
  };
  