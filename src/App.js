import './components/App.css';
import Home from './components/Home';
import Cinematheque from './components/Cinematheque';
import Game from './components/Game';
import {Link, Switch, Route} from 'react-router-dom';




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
        <Route path="/cinematheque">
          <Cinematheque />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
