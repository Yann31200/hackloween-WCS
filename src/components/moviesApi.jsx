import React from "react";
import Cinematheque from "./Cinematheque"
import axios from "axios";

class MoviesApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: null};
        this.getMovie = this.getMovie.bind(this);
        }


  componentDidMount() {
    this.getMovie();
  }

    getMovie(){
        axios
            .get(
                `https://hackathon-wild-hackoween.herokuapp.com/movies`
            )
            .then(response => response.data)
            .then(data => {
                this.setState({
                    movie: data.movies[0]
            });
            });
        }

    render() {
        const {movie} = this.state;
        return <div>{this.state.movie ? <Cinematheque movie={movie}/> : null}</div>
    }
}

export default MoviesApi;