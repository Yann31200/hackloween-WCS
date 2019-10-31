import React from 'react';
import MoviesApi from './components/moviesApi';
import './components/App.css';
import Home from './components/acceuil';
// import Game from './components/Game';
import {Link, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer'

function App() {
  return (
    <div className= "App">
      <nav class="nav-container">
        <ul>
          <li><Link to="/home">Acceuil</Link></li>
          <li><Link to="/cinematheque">Cinemathèque</Link></li>
          <li><Link to="/game">Quizz</Link> </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cinematheque" component={MoviesApi}/>
        <Route path="/game">
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
