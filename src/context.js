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
    let rooms= this.formatData(items)
  }
  formatData(items){
    let tempItems = items.map(item =>{
      let id = item.sys.id;
      let images = items.fields.images.map(image =>  image.fields.file.url);



    });
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
