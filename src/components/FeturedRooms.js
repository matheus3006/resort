import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeturedRooms extends Component {
  static contextType = RoomContext
  render() { 
    // const {} = this.context;
    
    return <div> featured rooms   </div>
  }
}
