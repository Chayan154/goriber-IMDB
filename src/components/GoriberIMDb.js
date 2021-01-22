import React, { Component } from 'react';
import SearchMovie from './SearchMovie';
import SearchResults from './SearchResults';

const initialState = {
    searchTerm: '',
    movieData: {},
    movieList: [],
    error: '',
};
class GoriberIMDb extends Component {
    state = initialState;

    movieSearch = (name, data) => {
        if (data.Response !== 'False') {
            this.setState({
                searchTerm: name,
                movieData: data,
                movieList: data.Search,
                error: '',
            });
        } else {
            this.setState({
                error: data.Error,
            });
        }
    };

    render() {
        return (
            <div>
                <SearchMovie movieSearch={this.movieSearch} />
                <SearchResults data={this.state} />
            </div>
        );
    }
}

export default GoriberIMDb;
