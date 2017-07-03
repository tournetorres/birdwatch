import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Moment from 'moment-timezone';


const TimelinePost = ({ bird, location, username, created }) => (
  <Card>
    <CardTitle title={`Birdtype: ${bird}`} />
    <br />
    <CardTitle title={`Location: ${location}`} />
    <br />
    <CardHeader
      title={`bird sighting by @${username}`}
      subtitle={`spotted ${Moment(created).calendar()}`}
    />
  </Card>
);

TimelinePost.propTypes = {
  bird: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  created: PropTypes.string,
  username: PropTypes.string.isRequired,
};

export default TimelinePost;
