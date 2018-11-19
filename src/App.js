import React, { Component } from 'react';
import './App.css';
import LeaderboardView from './views/LeaderboardView';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <LeaderboardView />
      </div>
    );
  }
}

export default App;
