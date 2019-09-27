import React from "react";
import Hero from "../components/Hero";
import RoomContainer from '../components/RoomContainer';
import Banner from "../components/Banner";
import { Link } from "react-router-dom";


const Rooms = () => {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>
  );
};

export default Rooms;
