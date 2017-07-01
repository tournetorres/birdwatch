import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
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
      console.log(this.state.birdFeed, 'after posted');
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
          <Footer />
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default Timeline;
