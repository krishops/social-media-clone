import React from 'react';

function Navbar(){
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Social Media Clone</a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div 
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              Home
            </li>
            <li class="nav-item">
              Notifications
            </li>
            <li class="nav-item">
              Messages
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;