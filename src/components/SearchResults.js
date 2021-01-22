import React from 'react';
import MovieItem from './MovieItem';

function SearchResults({ data }) {
    const searchResults = data.error ? (
        <h3>{data.error}</h3>
    ) : (
        data.movieList.map((film) => (
            <MovieItem key={film.imdbID} film={film} />
        ))
    );
    return <div>{searchResults}</div>;
}

export default SearchResults;
