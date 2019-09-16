import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../components/Loading";
import Room from './Room';
import Title  from './Title';


export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const {loading, featuredRooms: rooms } = this.context;

    return(
      <div>
        from featured Rooms
        <Room />
      <Loading />
      </div>
      
    );
  }
}
