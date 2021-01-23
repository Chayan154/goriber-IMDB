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
    return (
        <div>
            <h2>Search Results for: '{data.searchTerm}'</h2>
            <div>{searchResults}</div>
        </div>
    );
}

export default SearchResults;
