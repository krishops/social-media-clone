import React from 'react';
import Friends from './Friends'

const friendsList = [
  {
    name: 'Co Rona'
  },
  {
    name: 'Delta V'
  },
  {
    name: 'Pan Demic'
  },
  {
    name: 'Sanitiser'
  }
];

function FriendList(){
  return(
    <React.Fragment>
      <h1>People You May Know</h1>
      <hr/>
      {friendsList.map((friend, index) => 
        <Friends name={friend.name}
            key={index}/>
      )}
    </React.Fragment>
  );
}

export default FriendList;