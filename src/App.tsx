import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './view/home'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
