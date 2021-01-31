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
            <div>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>Genre: {movie.Genre}</h3>
                <h3>Release Date: {movie.Released}</h3>
                <div className='rating'>
                    <h3>Ratings</h3>
                    <section className='rating-items'>
                        <div>
                            <img src='./IMDb_logo.svg' />
                            <p>
                                {movie.imdbRating}/10 ({movie.imdbVotes} votes)
                            </p>
                        </div>
                        <div>
                            <img src='./Metacritic_logo_original.svg' />
                            <p>{movie.Metascore}/100</p>
                        </div>
                        <div>
                            <img src='./Rotten_Tomatoes.svg' />
                            <p>{movie.Ratings[2].Value}</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
