import React, { Component } from 'react';

async function getMovieDetails(id) {
    let url = `https://www.omdbapi.com/?apikey=7e4e81e9&i=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        const match = props.match;

        this.state = {
            movieId: match.params.id,
            movieData: {},
        };
    }

    async componentDidMount() {
        const data = await getMovieDetails('tt4154756');
        this.setState({
            movieData: data,
        });
    }

    render() {
        const movie = this.state.movieData;
        return (
            <div>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>Release Date: {movie.Released}</h3>
                <h4>IMDb Rating: {movie.imdbRating}</h4>
            </div>
        );
    }
}

export default MovieDetails;
