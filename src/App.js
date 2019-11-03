import React from 'react';
import MoviesApi from './components/page/moviesApi';
import './components/css/App.css';
import Home from './components/page/accueil';
import {Link, Switch, Route} from 'react-router-dom';
import Footer from './components/page/footer'
import Quizz from './components/page/quizz';

function App() {
  return (
    <div className= "App">
      <nav class="nav-container">
        <ul className="nav">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/cinematheque">Cinemathèque</Link></li>
          <li><Link to="/game">Quizz</Link> </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cinematheque" component={MoviesApi} />
        <Route path="/game" component={Quizz} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
