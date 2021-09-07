import React from 'react';
import Status from './Status';

const statusList = [
  {
    name: 'Poop',
    status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Potato',
    status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Toot',
    status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

function StatusList(){
  return(
    <React.Fragment>
      <h1>Status List</h1>
      <hr/>
      {statusList.map((status, index) => 
        <Status name={status.name}
          status={status.status}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default StatusList;
  