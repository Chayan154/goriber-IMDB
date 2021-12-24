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
                        <p>
                            <span>Genre: </span>
                            {movie.Genre}
                        </p>
                        <p>
                            <span>Released: </span>
                            {movie.Released}
                        </p>
                        <p>
                            <span>Runtime: </span>
                            {movie.Runtime}
                        </p>
                        <p>
                            <span>Language: </span>
                            {movie.Language}
                        </p>
                        <p>
                            <span>Country: </span>
                            {movie.Country}
                        </p>
                        <p>
                            <span>Director: </span>
                            {movie.Director}
                        </p>
                        <p>
                            <span>Writers: </span>
                            {movie.Writer}
                        </p>
                        <p>
                            <span>Actors: </span>
                            {movie.Actors}
                        </p>

                        <p>
                            <span>Plot: </span>
                            {movie.Plot}
                        </p>
                        <p>
                            <span>Awards: </span>
                            {movie.Awards}
                        </p>
                        <Ratings data={movie} />
                    </section>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
