import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

export default class ContactModal extends Component {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogTitle>Send us a message (Under Construction)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Contact us directly:
            <ul>
              <li>info@gerimedmobility.co.za</li>
              <li>Tel: 022 772 1273</li>
              <li>Cell: 082 079 4173</li>
            </ul>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button disabled onClick={this.props.onClose} color="primary" variant='contained'>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
