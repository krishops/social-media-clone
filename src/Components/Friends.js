import React from 'react';
import PropTypes from "prop-types";

function Friends(props){
  return(
    <React.Fragment>
      <div className="row">
        <h4>{props.name}</h4>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Friends.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Friends;