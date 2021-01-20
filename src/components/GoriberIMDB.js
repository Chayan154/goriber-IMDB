import React, { Component } from 'react';
import SearchMovie from './SearchMovie';
import MovieItem from './MovieItem';

class GoriberIMDb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            movieData: {},
            movieList: [],
        };
    }

    movieSearch = (name, data) => {
        this.setState({
            searchTerm: name,
            movieData: data,
            movieList: data.Search,
        });
    };

    render() {
        const searchResults = this.state.movieList.map((film) => (
            <MovieItem key={film.imdbID} film={film} />
        ));
        return (
            <div>
                <h1>গরিবের IMDb 🎥</h1>
                <SearchMovie movieSearch={this.movieSearch} />
                {searchResults}
            </div>
        );
    }
}

export default GoriberIMDb;
