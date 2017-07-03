import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimelinePost from './TimelinePost.jsx';
import Comment from './Comment.jsx';
import Footer from './Footer.jsx';
import Header from '../Header.jsx';

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      birdFeed: null,
    };
    this.loadFeed = this.loadFeed.bind(this);
  }
  componentDidMount() {
    this.loadFeed();
  }
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
            <Comment loadFeed={this.loadFeed} />
            <div className="bird-feed">
              {this.state.birdFeed && this.state.birdFeed.map(birdPost => (
                <TimelinePost
                  bird={birdPost.bird}
                  location={birdPost.location}
                  created={birdPost.created}
                  username={birdPost.username}
                  key={birdPost.id}
                />
              ))}
            </div>
            <Footer loadFeed={this.loadFeed} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Timeline;
