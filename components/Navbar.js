import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="index.html">
            <h1>Home <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
          <a className="navbar-brand" href="create.html">
            <h1>Create <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;