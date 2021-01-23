import React, { Component } from 'react';
import SearchMovie from './SearchMovie';
import SearchResults from './SearchResults';

const initialState = {
    searchTerm: '',
    movieData: {},
    movieList: [],
    error: '',
    response: '',
};
class GoriberIMDb extends Component {
    state = initialState;

    movieSearch = (name, data) => {
        if (data.Response !== 'False') {
            this.setState({
                searchTerm: name,
                movieData: data,
                movieList: data.Search,
                response: data.Response,
                error: '',
            });
        } else {
            this.setState({
                searchTerm: name,
                error: data.Error,
                response: data.Response,
            });
        }
    };

    render() {
        return (
            <div>
                <SearchMovie movieSearch={this.movieSearch} />
                {this.state.response && <SearchResults data={this.state} />}
            </div>
        );
    }
}

export default GoriberIMDb;
