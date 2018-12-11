import React from 'react';
import classes from './screenRow.css';
// import PropTypes from 'prop-types'; 

const ScreenRow = (props) => {
    return (
      <div className={classes.screenRow}>
        <input type="text" readOnly value={props.value}/>
      </div>
    )
  }
  
//   ScreenRow.propTypes = {
//     value: React.PropTypes.string.isRequired
//   }

export default ScreenRow;