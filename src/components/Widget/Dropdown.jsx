import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

function Dropdown({items}) {
  return (
    <ButtonGroup>
      <DropdownButton title="Dropdown" id="bg-nested-dropdown">
        {items.map((item, index) => (
          <MenuItem>{item}</MenuItem>
        ))}
      </DropdownButton>
    </ButtonGroup>
  );
}

export default (Dropdown);
//export default withStyles(s)(Dropdown);


