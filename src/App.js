import React from 'react';
import Footer from './components/Footer.jsx';
import MoviesApi from './components/moviesApi';
// import Cinematheque from './components/Cinematheque';

function App() {
  return (
    <div>
      <MoviesApi />
      <Footer />
    </div>
  );
}

export default App;
