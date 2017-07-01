import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';


const TimelinePost = ({ birdPost, key }) =>(
  <Card>
    <CardHeader
      title={"bird sighting by @" + birdPost.username}
    />
    <CardTitle
      title={"type of bird: " + birdPost.bird}
    />
    <CardTitle
      title={"location: " + birdPost.location}
    />  
    <CardText>
      createdAt
    </CardText>
  </Card>
);

export default TimelinePost;