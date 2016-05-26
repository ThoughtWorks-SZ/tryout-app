import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import s from './Checkbox.scss';

class Checkbox extends Component {

  render() {
    return (
      <label><input name="" type="checkbox" value=""></input>{this.props.checkboxLabel}</label>
    );
  }
}

export default (Checkbox);
//export default withStyles(s)(Checkbox);

