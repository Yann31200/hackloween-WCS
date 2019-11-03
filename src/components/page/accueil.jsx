import React from 'react';
import '../css/accueil.css';

function Accueil ( {movie}) {
        return (
            < div className="container" >
                <div className="presentation">
                    <h1 className="h1">On the flux</h1>
                    <h2 className="h2">Ce site référencie tous les films d'horreur les plus flippants du game</h2>
                    <p className="text">Nous sommes une équipe de quatre dev qui te proposent de découvrir notre sélection raffinée. </p>
                    <h3 className="title">En voici une brève sélection ma p'tite flipette</h3>
                </div>
                <div className="film">
                    <img className="images" src="https://zupimages.net/up/19/44/0j3u.jpg" alt=""/>
                    <img className="images" src="https://zupimages.net/up/19/44/tuqk.jpg" alt=""/>
                    <img className="images" src="https://zupimages.net/up/19/44/6ihf.jpg" alt=""/>
                    <img className="images" src="https://zupimages.net/up/19/44/aupc.jpg" alt=""/>
                </div>
            </div >
        )
    };

export default Accueil;


