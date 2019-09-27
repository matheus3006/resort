import React from 'react';
import {useContext} from 'react';
import{RoomContext} from '../context';
import Title from '../components/Title';
// import { Container } from './styles';

export default function RoomFilter() {
  const context = useContext(RoomContext);
  console.log(context);
  return (
    <div>Hello from room Filter</div>
  );
}
