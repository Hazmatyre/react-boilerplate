import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


class CityErr extends Component {

  constructor() {
    this.setState({open: false});
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton
        label="Ok!"
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="No city found with that name."
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          Please try again.
        </Dialog>
      </div>
    );

  }

}
export default CityErr;
