import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from '../components/Services';
import FeturedRooms from '../components/FeturedRooms';

// import { Container } from './styles';

const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeturedRooms />
    </>
  );  
};

export default Home;
