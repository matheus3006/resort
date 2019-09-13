import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlingnRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default class NavBar extends Component {
  state={
    isOpen:false;
  }
  //how to make toggles
  handleToggle = ()=> {
    this.setState({isOpen:! this.state.isOpen});
  }
  render() {
    return (
      <div>
        Hi from navbar
      </div>
    )
  }
}
