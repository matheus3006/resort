import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
// import { Container } from './styles';

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {
      (value) => {
        const {loading,sortedRooms,rooms} = value
        if(loading){
          return <Loading/>;
        }
        return (
          <div>
            Hello from rooms Container
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
