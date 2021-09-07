import React from 'react';
import PropTypes from "prop-types";

function Status(props){
  return(
    <React.Fragment>
      <div className="row">
        <h4>{props.name}</h4>
        <p>{props.status}</p>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Status.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Status;