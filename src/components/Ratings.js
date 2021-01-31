import React from 'react';
import imdbLogo from '../IMDb_logo.svg';
import metaLogo from '../Metacritic_logo_original.svg';
import rtmLogo from '../Rotten_Tomatoes.svg';

function Ratings(props) {
    const movie = props.data;
    return (
        <section className='rating-items'>
            <h3>Ratings: </h3>
            <div>
                <img src={imdbLogo} alt='imdb' />
                <p>
                    {movie.imdbRating}/10 ({movie.imdbVotes} votes)
                </p>
            </div>
            {movie.Metascore !== 'N/A' ? (
                <div>
                    <img src={metaLogo} alt='metacritic' />
                    <p>{movie.Metascore}/100</p>
                </div>
            ) : null}
            {movie.Ratings[1] !== undefined ? (
                <div>
                    <img src={rtmLogo} alt='rotten tomatoes' />
                    <p>{movie.Ratings[1].Value}</p>
                </div>
            ) : null}
        </section>
    );
}

export default Ratings;
