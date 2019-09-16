import React, { Component } from "react";
//Context API
import items from './data';
const RoomContext = React.createContext();
//
class RoomProvider extends Component {
  state = {
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading: true
  };
  //getData { }
  componentDidMount(){
    //this.getData
    let rooms= this.formatData(items)
    console.log(rooms);
  }
  formatData(items){
    let tempItems = items.map(item =>{
      let id = item.sys.id;
      let images = item.fields.images.map(image =>  image.fields.file.url);

      let room = {...item.fields ,images:images,id}
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
