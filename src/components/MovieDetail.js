import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMoviesServiceGetMovieById } from "../services/UseMoviesService";


export const MovieDetail = (props) => {

  const movie = useMoviesServiceGetMovieById(props);

  return (
    <div>
     <h2>Movie Detail</h2>
    
     <h2>Title:</h2>
     {movie.title}

     <h2>Overview:</h2> 
     {movie.overview}

     <h2>Runtime:</h2> 
     {movie.runtime} minutes.

     <h2>Release Date:</h2> 
     {movie.release_date}
     
     <h2>Status:</h2> 
     {movie.status}

     <h2>Popularity:</h2> 
     {movie.popularity}

     <h2>Vote Average:</h2> 
     {movie.vote_average}

     <h2>Vote Count:</h2> 
     {movie.vote_count}

     <br></br>
     <br></br>
     <Link to={'/'}>Back to Movies List</Link>
    
    </div>
  );
};