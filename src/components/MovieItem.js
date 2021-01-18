import React from 'react';

function MovieItem(props) {
    const film = props.film;
    return (
        <div>
            <h2>{film.Title}</h2>
            <img src={film.Poster} alt={film.Title} />
        </div>
    );
}

export default MovieItem;
