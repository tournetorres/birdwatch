import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import moment from 'moment';


const TimelinePost = ({ birdPost, key }) => (
  <Card>
    <CardHeader
      title={"bird sighting by @" + birdPost.username}
      subtitle={"spotted at " + moment().format(birdPost.created)}
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