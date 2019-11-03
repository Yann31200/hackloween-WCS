import React from 'react';
import '../css/cinematheque.css';

function Cinematheque({ movie }) {
    return (
        <div className="cinematheque">
            <img className="movies" src={movie.posterUrl} alt={movie.title} />
            <div className="infos">
                <h2 className="movieTitle"> {movie.title} </h2>
                <div className="infoMovie">
                    <cite className="director"> Director: {movie.director} </cite>
                    <cite className="country"> Country: {movie.country} </cite>
                    <cite className="year"> Release in: {movie.year} </cite>
                </div>
            </div>
        </div>
    );
}

export default Cinematheque;