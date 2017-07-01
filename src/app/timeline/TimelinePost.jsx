import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Moment from 'moment-timezone';


const TimelinePost = ({ birdPost, key }) => (
  <Card>
    <CardHeader
      title={"bird sighting by @" + birdPost.username}
      subtitle={"spotted " + Moment(birdPost.created).calendar()}
    />
    <CardTitle
      title={"type of bird: " + birdPost.bird}
    />
    <CardTitle
      title={"location: " + birdPost.location}
    />   
  </Card>
);

export default TimelinePost;