import React, { Component } from 'react';

let pageContainer = {
  style:{
    border: "solid black",
    borderSize: "2px"
  }
}

let inputArea = {
  style:{
    
    border: "solid black",
    borderSize: "2px"
  }
}

let inputContainer = {
  style:{
    
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

const ActivityList = (props) => {
  return <div><span>{props.min}</span> <span>{props.desc} </span></div>
}

class App extends Component {

 constructor(props) {
    super(props);

    this.state = {
      personal: [],  // {id: minutes: , desc:  }
      work: [],
      personaltimetotal: 0, 
      worktimetotal: 0,
      personalid: 0,
      workid: 0,
      tempproject: "personal",
      tempdescription: "",  
      tempminutes: 0,
      submitvalid: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.valDescription = this.valDescription.bind(this)
    this.valMinutes = this.valMinutes.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(e){
    let selected = e.target.value
    this.setState({tempproject: selected})
  }

  valDescription(e){
    let desc = e.target.value.trim();
    //if(desc.substr(4[1]) === null){
      this.setState({tempdescription: desc})
    //}
  }

  valMinutes(e){
    let min = e.target.value;
    this.setState({tempminutes: min})
  }

  handleAdd(e) {
    if(this.state.tempproject === 'personal'){
      this.state.personal.push({id: this.state.personalid, minutes: this.state.tempminutes, desc: this.state.tempdescription})
      this.setState({personaltimetotal: parseInt(this.state.personaltimetotal, 10)+parseInt(this.state.tempminutes, 10)})
      this.setState({personalid: parseInt(1, 10)+parseInt(this.state.personalid, 10)})
    }else{
      this.state.work.push({id: this.state.workid, minutes: this.state.tempminutes, desc: this.state.tempdescription})
      this.setState({worktimetotal: parseInt(this.state.worktimetotal, 10)+parseInt(this.state.tempminutes, 10)})
      this.setState({workid: parseInt(1, 10)+parseInt(this.state.workid, 10)})
    }
  }
  
  render() {
    this.state.personal.sort((a, b) => (b.minutes - a.minutes));
    this.state.work.sort((a, b) => (b.minutes - a.minutes));
    const personal = this.state.personal.map((personal) => (
      <ActivityList 
        key = {'pers-' + personal.id} 
        desc={personal.desc} 
        min={personal.minutes} />
    ));
    const work = this.state.work.map((work) => (
      <ActivityList 
        key = {'work-' + work.id} 
        desc={work.desc} 
        min={work.minutes} />
    ));
    return (
      <div style={pageContainer.style}>
        <div style={inputArea.style} >Work Logger</div>
        <div style={inputContainer.style}> 
          <div style={inputItem.style}>
            <div style={leftItem.style}>Project</div>
              <select style={rightItem.style} type="dropdown" onChange={this.handleSelect} >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
              </select>
          </div>
          <div style={inputItem.style}>
            <div style={leftItem.style} >Description</div><input style={rightItem.style} type="text" onBlur={this.valDescription} />
          </div>
          <div style={inputItem.style}>
            <div style={leftItem.style}>Minutes</div><input style={rightItem.style} type="number" min="1" max="240" onBlur={this.valMinutes}/>
          </div>
          <button type="submit" onClick={this.handleAdd}>Add</button>
        </div>
        <hr />
        <div style={displayArea.style}>
          <div style={projectContainer.style}>
            <span>Personal</span><span>{this.state.personaltimetotal}</span>
            <div>{personal}</div>
          </div>
          <div style={projectContainer.style}>
          <span>Personal</span><span>{this.state.worktimetotal}</span>
            <div>{work}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
