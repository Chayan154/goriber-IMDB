import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ film }) {
    return (
        <div>
            <img src={film.Poster} alt={film.Title} />
            <Link to={`/${film.imdbID}`}>
                <h2>{film.Title}</h2>
            </Link>
        </div>
    );
}

export default MovieItem;
