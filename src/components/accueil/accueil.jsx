import React from 'react';
import './css/accueil.css';

function Accueil ( {movie}) {
        return (
            <div className="container">
                <div className="presentation">
                    <h1 className="title">On the flux</h1>
                    <h2 className="title">Ce site référencie tous les films d'horreur les plus flippants du quiz</h2>
                    <p className="text">Nous sommes une équipe de quatre dev qui te proposent de découvrir notre sélection raffinée. </p>
                    <h3 className="title">En voici une brève sélection ma p'tite flipette</h3>
                </div>
                <div className="film">
                    <img alt="" className="images" src="https://zupimages.net/up/19/44/0j3u.jpg" />
                    <img alt="" className="images" src="https://zupimages.net/up/19/44/tuqk.jpg" />
                    <img alt="" className="images" src="https://zupimages.net/up/19/44/6ihf.jpg" />
                    <img alt="" className="images" src="https://zupimages.net/up/19/44/aupc.jpg" />
                </div>
            </div>
        )
    };

export default Accueil;