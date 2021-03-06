import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutView from './views/AboutView';
import AdminDashboardView from './views/AdminDashboardView';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeaderboardView from './views/LeaderboardView';
import QuizzesView from './views/QuizzesView';
import Scorecard from './components/Scorecard/Scorecard';
import TeamsView from './views/TeamsView';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LeaderboardView} />
        <Route exact path="/teams" component={TeamsView} />
        <Route exact path="/quizzes/" component={QuizzesView} />
        <Route exact path="/new-quiz" component={Scorecard} />
        <Route exact path="/admin-dashboard" component={AdminDashboardView} />
        <Route exact path="/about" component={AboutView} />
        <Footer />
      </div>
    );
  }
}

export default App;
