import React from 'react';

const TimelinePost = ({ birdPost, key }) => (
  <div className="row">
    <div className="col s8 m10 l11">
      <span className="username">{birdPost.username} spotted a {birdPost.bird} at {birdPost.location}</span>
    </div>
  </div>
);

export default TimelinePost;