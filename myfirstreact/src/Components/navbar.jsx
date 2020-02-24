import React, { Component } from 'react';

const NavBar = ({totalCounters, totalCountersId}) => {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary m-2">
          Položek:{ }{totalCounters}
          </span>
          <span className="badge badge-pill badge-secondary m-2">
          Celkem kusů:{ } {totalCountersId}
          </span>
        </a>
      </nav>
    );
  };

// class NavBar extends Component {
//     state = {  }
//     render() { 
//         return ( <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">Navbar 
//     <span className="badge badge-pill badge-secondary m-2">{this.props.totalCounters}</span>
//         </a>
//       </nav> );
//     }
// }
 
export default NavBar;