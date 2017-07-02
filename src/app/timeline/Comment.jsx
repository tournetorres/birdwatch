import React, { Component } from 'react';
import axios from 'axios';
import Geosuggest from 'react-geosuggest';
import { Dialog, FlatButton, TextField, RaisedButton } from 'material-ui/';
import Message from 'material-ui/svg-icons/communication/comment';

const messageIcon = <Message />;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, birdType: '', location: '' };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.submitText = this.submitText.bind(this);
  }
  submitText() {
    const message = { birdType: this.state.birdType, location: this.state.location };
    axios.post('/birds', message)
    .then( (response) => {
      console.log(response, 'success');
      this.props.loadFeed();
    })
    .catch(err => console.log(err));
  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const actions = [
      <FlatButton
        type="reset"
        label="Reset"
        secondary={true}
        style={{ float: 'left' }}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        type="submit"
        label="Submit"
        primary={true}
        onClick={this.submitText}
      />,
    ];
    return (
      <div>
        <RaisedButton label="Log bird Sighting" onTouchTap={this.handleOpen} icon={messageIcon} />
        <Dialog
          title="Log Bird Sightings"
          modal={true}
          open={this.state.open}
        >
          <form 
            action='/bird'
            method='POST' 
            onSubmit={(e) => {
              e.preventDefault();
              this.handleClose(); }}
          >
          Log the location and type of bird you have spotted.
          <br />
            <TextField name="text" hintText="bird type" onChange={(e, newVal) => this.setState({ birdType: newVal })} />
            <Geosuggest 
              ref={el=>this._geoSuggest=el}
              placeholder="location"
              initalValue="New Orleans"
              onSuggestSelect={(val) => this.setState({ location: val.description })}
              onChange={this.onChange}
              location={new google.maps.LatLng(29.95106579999999, -90.0715323)}
              radius="20"
            />
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
              {actions}
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
};

export default Comment; 