import React from "react";

// import { Container } from './styles';

export default function Hero({ children, hero }) {
  return (
<header className={hero}> {children} </header>
  );
}

Hero.defautProps = {
  hero: "defaultHero"
};
