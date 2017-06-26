import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  render(){
    return(
      <header>
        <h1>Hello World!</h1>
        <button>My Birds</button>
        <button>Search All Birds</button>
     </header>
    );
  }
}

export default Header;