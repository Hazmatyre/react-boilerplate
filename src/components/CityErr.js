import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class CityErr extends Component {

  constructor(props) {
    super(props)
    this.err = this.props.err
    this.handleErrClose = this.props.onErrClose;
  }

  render() {
    const actions = [
      <RaisedButton
        label="Ok!"
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.handleErrClose}
      />,
    ];

    return (
      <Dialog
        title="No city found"
        actions={actions}
        contentStyle={{maxWidth: 480}}
        actionsContainerStyle={{paddingRight:20, paddingBottom:20}}
        modal={false}
        open={this.err}
        onRequestClose={this.handleErrClose}>
        Sorry, please try again.
      </Dialog>
    );

  }

}
export default CityErr;
