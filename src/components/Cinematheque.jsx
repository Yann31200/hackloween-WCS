import React from 'react';
import axios from 'axios';
import Cinematheque from './Cinematheque';


const Cinematheque = () => {
    return (
        <div>
          <Cinematheque />
        </div>
    );

function Cinematheque({movie}) {
    return (
        <div className="cinematheque">
            <h3> {movie.title} </h3>
            <img src={movie.posterUrl} alt={movie.title}/>
            <cite> {movie.director} </cite>
            <cite> {movie.year} </cite>
            <cite> {movie.country} </cite>
        </div>
    );
}

export default Cinematheque;