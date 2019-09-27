import React from "react";
import Room from "./Room";

// import { Container } from './styles';

export default function RoomList({ rooms }) {
  if (rooms.lenght === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately there are no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
