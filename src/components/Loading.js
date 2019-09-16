import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif'
// import { Container } from './styles';

export default function Loading() {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
    <img src={loadingGif} alt="carregando..."/>
    </div>
  );
}
