import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ film }) {
    return (
        <div className='item-box'>
            <img src={film.Poster} alt={film.Title} />
            <p>
                {film.Title} ({film.Year})
            </p>
            <Link to={`/${film.imdbID}`}>More Details</Link>
        </div>
    );
}

export default MovieItem;
