import React, { PropTypes } from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './Button.scss';

function Button({ buttonType, buttonText }) {
  let buttonToDisplay;
  if (buttonType === 'primary') {
    buttonToDisplay = (<button type="button" className={s.primaryButton}>
      {buttonText}</button>);
  } else if (buttonType === 'info') {
    buttonToDisplay = (<button type="button" className={s.infoButton}>
      {buttonText}</button>);
  } else if (buttonType === 'warning') {
    buttonToDisplay = (<button type="button" className={s.warningButton} disabled="true">
      {buttonText}</button>);
  } else if (buttonType === 'default') {
    buttonToDisplay = (<button type="button" className={s.defaultButton} disabled="true">
      {buttonText}</button>);
  }

  return (
    <div>
      {buttonToDisplay}
    </div>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default withStyles(s)(Button);
