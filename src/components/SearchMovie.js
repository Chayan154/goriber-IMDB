import React, { Component } from 'react';

async function getSearchResults(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

class SearchMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieName: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            movieName: event.target.value,
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let data = {};
        if (this.state.movieName !== '') {
            let url = `https://www.omdbapi.com/?apikey=7e4e81e9&s=${this.state.movieName}`;
            data = await getSearchResults(url);
        }

        //http://www.omdbapi.com/?apikey=7e4e81e9&s=avengers
        this.props.movieSearch(this.state.movieName, data);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Search Movies: </label>
                <input
                    type='text'
                    value={this.state.movieName}
                    onChange={this.handleChange}
                />
                <button type='submit'>🔍</button>
            </form>
        );
    }
}

export default SearchMovie;
