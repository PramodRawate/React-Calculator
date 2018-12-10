import React from 'react';
import classes from './button.css';
const Button = (props) => {
  return (
    <input
      className="input"
      type="button"
      className={props.type === 'action' ? 'button action-button' : 'button input-button'}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

// Button.propTypes = {
//   type: React.PropTypes.string.isRequired,
//   handleClick: React.PropTypes.func.isRequired,
//   label: React.PropTypes.string.isRequired
// }

export default Button;