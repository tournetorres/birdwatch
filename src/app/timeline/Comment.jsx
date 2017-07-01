import React, { Component } from 'react';
import axios from 'axios';
import { Dialog, FlatButton, TextField, RaisedButton } from 'material-ui/';
import Message from 'material-ui/svg-icons/communication/comment';
const messageIcon = <Message />
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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
    })
    .catch(err => console.log(err));
  }
  handleClose() {
    this.setState({ open: false });
  }
  handleOpen() {
    this.setState({ open: true });
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
            <TextField name="text" hintText="location" onChange={(e, newVal) => this.setState({ location: newVal })} />
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

