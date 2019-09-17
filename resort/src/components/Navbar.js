import React, { Component } from "react";
import logo from "../images/resort.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  //how to make toggles
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to ="/">home</Link>
          </li>
          <li>
            <Link to ="/rooms">Rooms</Link>
          </li>

          </ul>  
        </div>
      </nav>
    );
  }
}
