import React from 'react';
import Profile from './Profile';
import StatusList from './StatusList';
import Friends from './Friends';

function SiteContainer(){
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4"><Profile /></div>
        <div className="col-md-4"><StatusList /></div>
        <div className="col-md-4"><Friends /></div>
      </div>
    </React.Fragment>
  );
}

export default SiteContainer;