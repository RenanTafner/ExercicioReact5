import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";


export const useMoviesServiceGetPopularMovies = () => {

    const [movies, setMovies] = useState({data:[]});

    const requestMovies = async () => {
        const dataAux = await MoviesService.getPopularMovies();
        console.log(dataAux);
        setMovies({data:dataAux.data.results});
      };

    useEffect(() => {
    requestMovies();
  }, []);

  return movies;


};


export const useMoviesServiceGetMovieById= (props) => {
    const [movie, setMovie] = useState({data:undefined});

    const requestMovie = async () => {
        const movieResult = await MoviesService.getMovieById(props.match.params.id);
        setMovie(movieResult.data);
      };

    useEffect(() => {
      requestMovie();
    }, []);

    return movie;
};  
