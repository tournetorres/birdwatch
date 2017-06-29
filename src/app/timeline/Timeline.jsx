import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Header from '../Header.jsx';
import Comment from './Comment.jsx';
import TimelinePost from './TimelinePost.jsx';
import exampleBirdData from '../data/exampleBirdFeed.jsx';
import axios from 'axios';

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      birdFeed: exampleBirdData,
    };
    this.loadFeed = this.loadFeed.bind(this);
  }
  loadFeed() {
    axios.get('/birds').then((data) => {
      console.log(this.state.birdFeed, 'birdfeed');
      console.log(data.data);
      this.setState({ birdFeed: data.data });
      console.log(this.state.birdFeed, 'after');
    });
  }
  render() {
    return (
    <div>
      <MuiThemeProvider>
        <div>
          <Header />
          <Comment />
          <RaisedButton label="Load all Bird Sightings" onClick={event => this.loadFeed(event)} />
          <div className="bird-feed">
            {this.state.birdFeed.map(birdPost =>
              <TimelinePost birdPost={birdPost} key={birdPost.id} />)}
          </div>   
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default Timeline;
