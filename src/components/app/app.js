import React from 'react';
import './css/app.css';
import { Link, Switch, Route } from 'react-router-dom';
import Accueil from '../accueil/accueil';
import Quiz from '../quiz/quiz';
import MoviesApi from '../cinematheque/moviesApi';
import Footer from '../footer/footer';

function App() {
  return <Headline />;
}
// Headline render 
function Headline() {
  return (
    <div className="App">
       <nav className="nav-container">
         <ul className="nav">
           <li><Link to="/">Accueil</Link></li>
           <li><Link to="/cinematheque">Cinemathèque</Link></li>
           <li><Link to="/quiz">Quiz</Link> </li>
         </ul>
       </nav>
       <Switch>
         <Route exact path="/" component={Accueil} />
         <Route path="/cinematheque" component={MoviesApi} />
         <Route path="/quiz" component={Quiz} />
       </Switch>
       <Footer/>
  </div>)
}

export default App;