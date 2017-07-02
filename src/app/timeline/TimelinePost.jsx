import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Moment from 'moment-timezone';


const TimelinePost = ({ birdPost, key }) => (
  <Card>
    <CardText>
      {"Bird: " + birdPost.bird}
      <br />
      <br />
      {"Location: " + birdPost.location}
    </CardText>   
    <CardHeader
      title={"bird sighting by @" + birdPost.username}
      subtitle={"spotted " + Moment(birdPost.created).calendar()}
    />
  </Card>
);

export default TimelinePost;