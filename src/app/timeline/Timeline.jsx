import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TimelinePost from './TimelinePost.jsx';
import Header from '../Header.jsx';
import Footer from './Footer.jsx';
import Comment from './Comment.jsx';
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
  // componentDidMount(){
  //   this.props.loadFeed();
  // }
  loadFeed() {
    axios.get('/birds').then((data) => {
      this.setState({ birdFeed: data.data });
      console.log(this.state.birdFeed, 'fetch birds');
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
            {this.state.birdFeed.map((birdPost, index, arr) =>
              <TimelinePost birdPost={birdPost} key={index} />)}
          </div>
          <Footer loadFeed={this.loadFeed}/>
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default Timeline;
