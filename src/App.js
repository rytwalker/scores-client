import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LeaderboardView from './views/LeaderboardView';
import QuizzesView from './views/QuizzesView';
import Sidebar from './components/Sidebar';
import './styles/App.css';
import QuizForm from './components/QuizForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={LeaderboardView} />
        <Route exact path="/latest-quiz" component={QuizzesView} />
        <Route exact path="/new-quiz" component={QuizForm} />
      </div>
    );
  }
}

export default App;
