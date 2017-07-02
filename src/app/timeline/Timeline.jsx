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
  componentDidMount() {
    this.loadFeed();
  }
  // componentWillMount() {
  // }
  // componentWillUnMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // handleScroll() {
  //     var body = event.srcElement.body
  //     // When the client reaches at the bottom of the page, get next page
  //     if (body.clientHeight + body.scrollTop >= body.offsetHeight) {
  //         this.loadFeed()
  //     }
  // },

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
          <Comment loadFeed={this.loadFeed}/>
          <div className="bird-feed">
            {this.state.birdFeed.map((birdPost, index) =>
              <TimelinePost birdPost={birdPost} key={index} />)}
          </div>
          <Footer loadFeed={this.loadFeed} />
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default Timeline;
