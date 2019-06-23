import React, { Component } from 'react';
import Loader from '../components/Loader/Loader';

class AboutView extends Component {
  render() {
    return (
      <div style={{ minHeight: '100vh', maxWidth: '600px', margin: '0 auto' }}>
        <h2>ABOUT</h2>
        <p style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          Suzie's Scores is a score tracking app built for all the teams that
          attend pub quiz week after week at Suzie's Dogs and Drafts in
          Boardman, Ohio. After QMing there for a while I realized that there
          isn't a good way to keep track of teams scores over a long period of
          time. The best stats we were getting were just from a week to week
          basis. So I've spent the good part of a year compiling these scores
          and building this app in my free time.
        </p>
        <p style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          If you are a team that comes week after week but uses a different team
          name each week, click on the TEAMS tab and browse through the team
          names, find all the team names you've played under, and send me an
          email at rytwalker @ gmail dot com. I will consolidate the scores so
          you have an accurate conglomeration of scores.
        </p>
        <p style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          Over the last almost year I have been going to school for computer
          science and wanted to build a project related to something I'm
          interested in.
        </p>
      </div>
    );
  }
}

export default AboutView;
