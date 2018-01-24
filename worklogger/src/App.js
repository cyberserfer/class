import React, { Component } from 'react';

let pageContainer = {
  style:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid black",
    borderSize: "2px"
  }
}

let inputArea = {
  style:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid black",
    borderSize: "2px"
  }
}

let inputContainer = {
  style:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    border: "solid black",
    borderSize: "2px"
  }
}

let inputItem = {
  style:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    border: "solid black",
    borderSize: "2px"
  }
}

let leftItem = {
  style:{
    float: "right",
    border: "solid black",
    width: "100px",
    borderSize: "2px"
  }
}

let rightItem = {
  style:{
    float: "left",
    width: "100px",
    border: "solid black",
    borderSize: "2px"
  }
}

let displayArea = {
  style:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "solid black",
    borderSize: "2px"
  }
}

let projectContainer = {
  style:{
    height: "125px",
    width: "200px",
    border: "solid black",
    borderSize: "2px"
  }
}


class App extends Component {

 constructor(props) {
    super(props);

    this.state = {
      personal: [],
      work: [],
      personaltimetotal: 0, 
      worktimetotal: 0,
      tempproject: "",
      tempdescription: "",  
      tempminutes: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.valDescription = this.valDescription.bind(this)
  }

  valDescription(e){
    let desc = e.target.value.trim();
    desc.substr(4[1]) === null;
    this.setState({tempdescription: desc})
  }

  valMinutes(e){
    let min = e.target.value;
    min ;
  }

  handleSubmit(e) {
//push
  }

  render() {
    return (
      <div style={pageContainer.style}>
        <div style={inputArea.style} >Work Logger</div>
        <div style={inputContainer.style}> 
          <div style={inputItem.style}>
            <div style={leftItem.style}>Project</div>
              <select style={rightItem.style} type="dropdown">
                <option value="personal">Personal</option>
                <option value="work">Work</option>
              </select>
          </div>
          <div style={inputItem.style}>
            <div style={leftItem.style} >Description</div><input style={rightItem.style} type="text" onBlur={this.valDescription} />
          </div>
          <div style={inputItem.style}>
            <div style={leftItem.style}>Minutes</div><input style={rightItem.style} defaultValue="1" type="number" min="1" max="240"/>
          </div>
          <button type="submit" onClick={this.handleSubmit}>Add</button>
        </div>
        <hr />
        <div style={displayArea.style}>
          <div style={projectContainer.style}>{this.state.tempdescription}</div>
          <div style={projectContainer.style}></div>
        </div>
      </div>
    );
  }
}

export default App;
