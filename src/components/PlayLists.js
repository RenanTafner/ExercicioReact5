import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";

export const PlayLists = () => {
    const [favoriteMovies, setFavoriteMovies] = useState({favoriteMovies:undefined });

    const favoriteMoviesStateReference = useSelector((state) => state.favoriteMovies);

    const requestFavoriteMovies= async () => {
        const favoriteMoviesResult = favoriteMoviesStateReference.favoriteMovies;
        setFavoriteMovies(favoriteMoviesResult);
      };

      useEffect(() => {
        requestFavoriteMovies();
      }, []);

    return (
        <div>
          <h2>Favorite Movies List</h2>
            
        <ul>
          {favoriteMoviesStateReference.favoriteMovies.length === 0 ?
            <p>No Favorite Movies added yet.</p>:
            favoriteMoviesStateReference.favoriteMovies.map(movieTitle =>
          <li>
           {movieTitle}
           <br></br>
           <br></br>
           </li>
          )}
        </ul>

        <Link to={'/'}>Back to Movies List</Link>
        </div>
      );

};

