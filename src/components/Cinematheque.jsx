import React from 'react';
import './cinematheque.css';

function Cinematheque(props) {
    return (
        <div className="cinematheque">
            <h3> {props.title} </h3>
            <img src={props.url}></img>
            <cite> {director} </cite>
            <cite> {year} </cite>
            <cite> {country} </cite>
        </div>
    );
}

export default Cinematheque;