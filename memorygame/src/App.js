import React, { Component } from 'react';


let selectedsquare = {
  style:{
    backgroundColor: "blue", 
    height: "100px",
    width: "100px",
    float: "left",
    border: "solid black",
    borderSize: "2px"
  }
}

let square = {
  style:{
    backgroundColor: "lightGray", 
    height: "100px",
    width: "100px",
    float: "left",
    border: "solid black",
    borderSize: "2px"
  }
}

let missedsquare = {
  style:{
    backgroundColor: "yellow", 
    height: "100px",
    width: "100px",
    float: "left",
    border: "solid black",
    borderSize: "2px"
  }
}

let incorrsquare = {
  style:{
    backgroundColor: "red", 
    height: "100px",
    width: "100px",
    float: "left",
    border: "solid black",
    borderSize: "2px"
  }
}

let corrsquare = {
  style:{
    backgroundColor: "green", 
    height: "100px",
    width: "100px",
    float: "left",
    border: "solid black",
    borderSize: "2px"
  }
}

let infobox = {
  style:{
    backgroundColor: "white", 
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid black",
    
  }
}

let infoboxbutton = {
  style:{
    backgroundColor: "white", 
    height: "25px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid black",
    position: "relative",
    margin: "0 auto",

  }
}

let titlebox = {
  style:{
    backgroundColor: "white", 
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em"
  }
}

let gamebox = {
  style:{
    backgroundColor: "black", 
    height: "315px",
    width: "420px",
    float: "left",
    border: "solid black"
  }
}

let outercontainer = {
  style:{
    backgroundColor: "white", 
    marginLeft: "100px"
  
  }
}


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      boxes:[
        {id: 0, findbox: 'Y', userselect: 'N'},
        {id: 1, findbox: 'N', userselect: 'N'},
        {id: 2, findbox: 'N', userselect: 'N'},
        {id: 3, findbox: 'Y', userselect: 'N'},
        {id: 4, findbox: 'N', userselect: 'N'},
        {id: 5, findbox: 'N', userselect: 'N'},
        {id: 6, findbox: 'N', userselect: 'N'},
        {id: 7, findbox: 'Y', userselect: 'N'},
        {id: 8, findbox: 'N', userselect: 'N'},
        {id: 9, findbox: 'N', userselect: 'N'},
        {id: 10, findbox: 'N', userselect: 'N'},
        {id: 11, findbox: 'Y', userselect: 'N'}
      ],
      
      boardstate: 'uninitialized'
    };
  }

squares() {

    switch(this.state.boardstate) {
      case 'uninitialized':
        return <div style={square.style}></div>;
      case 'unrevealed':
        return <div style={square.style}></div>;
      case 'memorize':
        return <div style={props.findbox === 'N' ? square.style : selectedsquare.style}></div>;
      case 'guess':
        return <div style={square.style}></div>;
      case 'check':
        return <div style={square.style}></div>;
      default:
        throw new Error('Something happened - value = '+ props.boardstate);
    }
}

footer() {

  switch(this.state.boardstate) {
    case 'uninitialized':
      return <div style={infoboxbutton.style} onClick={updateBoardState}> Start Game </div>;
    case 'unrevealed':
      return <div style={infobox.style}> Get ready to memorize in  </div>;
    case 'memorize':
      return <div style={infobox.style}> </div>;
    case 'guess':
      return <div style={infobox.style}> Guess the correct cells </div>;
    case 'check':
      return <div style={infoboxbutton.style}> Play again? </div>;
    default:
      throw new Error('Something happened - value = '+ this.state.boardstate)
  }
}

updateBoardState() {
  let newState = ''
  switch(this.state.boardstate) {
    case 'uninitialized':
      newState = 'unrevealed';
      break;
    case 'unrevealed':
      newState = 'memorize';
      break;
    case 'memorize':
      newState = 'guess';
      break;
    case 'guess':
      newState = 'check';
      break;
    case 'check':
      newState = 'unrevealed';
      break;
    default:
      throw new Error('Something happened')
  }
  this.setState({boardstate: newState});
}

  render() {
    const boxes = this.state.boxes.map((boxes) => (
      <Squares
        key = {'key-' + boxes.id}
        id={boxes.id}
        findbox={boxes.findbox}
        color={boxes.lib}
        boardstate={this.state.boardstate}
      />
    ));

    return (
      <div style={outercontainer.style}>
        <div style={titlebox.style} >Memory Game</div>
        <div style={gamebox.style}>
          {boxes}
        </div>
        <Footer style={infobox.style} boardstate={this.state.boardstate} />
      </div>
    );
  }
}

export default App;
