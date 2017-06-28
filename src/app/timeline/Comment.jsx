import React, { Component }from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Dialog, FlatButton, TextField } from 'material-ui/';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = { open: true };
    this.handleClose = this._handleClose.bind(this);
  }
  _handleClose() {
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
      />,
    ];
    return (
      <Dialog
        title="Log Bird Sightings"
        modal={true}
        open={this.state.open}
      >
        <form action='/comment' 
              method='POST' 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for adding a comment');
                this.handleClose(); }}
        >
        Log the location and type of bird that you have spotted.
          <TextField name="text" hintText="birdType" />
          <TextField name="text" hintText="location" />
          <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px'}}>
            {actions}
          </div>
        </form>
      </Dialog>   
    );  
  }
}; 


export default Comment;