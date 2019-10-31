import React from "react";
import Cinematheque from "./Cinematheque"
import axios from "axios";
import Home from './acceuil';

class MoviesApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: [] };
        this.getMovie = this.getMovie.bind(this);
    }


    componentDidMount() {
        this.getMovie();
    }

    getMovie() {
        axios
            .get(
                `https://hackathon-wild-hackoween.herokuapp.com/movies`
            )
            .then(response => response.data)
            .then(data => {
                this.setState({
                    movie: data.movies
                });
            });
    }

    render() {
        let { movie } = this.state;
        const allMovies = movie.map(movie => {
            return <div>{this.state.movie ? <Cinematheque movie={movie} /> : null}</div>
        });
        return <div>
            <div>{allMovies}</div>
            <Home movie={this.state.movie} />
        </div>
    }
}

export default MoviesApi;