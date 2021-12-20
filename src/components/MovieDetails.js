import React, { Component } from 'react';
import Ratings from './Ratings';

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
        const data = await getMovieDetails(this.state.movieId);
        this.setState({
            movieData: data,
        });
    }

    render() {
        const movie = this.state.movieData;
        if (!movie.Title) {
            return <h1>Loading...</h1>;
        }

        return (
            <div className='movieDetails'>
                <h2 className='title'>{movie.Title}</h2>
                <div className='dContainer'>
                    <img
                        className='poster'
                        src={movie.Poster}
                        alt={movie.Title}
                    />
                    <section className='details'>
                        <h3>Genre: {movie.Genre}</h3>
                        <h3>Release Date: {movie.Released}</h3>
                        <Ratings data={movie} />
                        <p>
                            <h3 style={{ display: 'inline' }}>Plot: </h3>
                            {movie.Plot}
                        </p>
                    </section>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
