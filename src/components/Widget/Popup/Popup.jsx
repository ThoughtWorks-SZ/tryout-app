import React, { Component, PropTypes } from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal';
import ModalDialog from '../../../../node_modules/react-bootstrap/lib/ModalDialog';
import Glyphicon from '../../../../node_modules/react-bootstrap/lib/Glyphicon';
//import s from './Popup.scss';
import b from '../Button/Button.scss';

var Popup = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const icon = this.props.error == "true" ? <Glyphicon glyph="remove-sign" />
    : <Glyphicon glyph="exclamation-sign" />

    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Click to see dialog
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <h1>{icon}</h1>
            <div>{this.props.message}</div>
            <div>{this.props.buttons.map((item,index) => (
              <Button bsStyle="primary" onClick={this.close}>{item}</Button>
            ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
})

export default (Popup);
// export default withStyles(s)(Popup);


