import React from 'react';
import './css/cinematheque.css';

function Cinematheque({ movie }) {
    return (
        <div className="cinematheque">
            <img className="movies" src={movie.posterUrl} alt={movie.title} />
            <div className="infos">
                <h3> {movie.title} </h3>
                <cite> {movie.director} </cite>
                <cite> {movie.year} </cite>
                <cite> {movie.country} </cite>
            </div>
        </div>
    );
}

export default Cinematheque;