import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoviesService } from "../services/MoviesService";

import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie
} from "../actions/favoriteMovieActions";

export const MoviesList = () => {

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favoriteMovies);


  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <div>

      <h2>Favorite Movies List</h2>

      <Link to={'/playlists'}>Click here to access Favorite Movies List</Link>

      <h2>Movies List</h2>
    <ul>
      {movies.data.results.map(movie =>
      <li>

       <Link to={'/movies/' + movie.id}>{movie.title}</Link>
       <br></br>
        <button onClick={() => dispatch(addFavoriteMovie(movie))}>Add this Movie to Favorite Movies List</button>
        <br></br>
        <br></br>
       </li>
      )}
    </ul>
    </div>
  );
};
