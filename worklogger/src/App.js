import React, { Component } from 'react';

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
      <div>
        <div>Work Logger</div>
        <div> 
          <div>
            <div>Project</div>
              <select type="dropdown" onChange={this.handleSelect} >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
              </select>
          </div>
          <div>
            <div>Description</div><input type="text" onBlur={this.valDescription} />
          </div>
          <div>
            <div>Minutes</div><input type="number" min="1" max="240" onBlur={this.valMinutes}/>
          </div>
          <button className=".button" type="submit" onClick={this.handleAdd}>Add</button>
        </div>
        <hr />
        <div>
          <div className="grid-example">
            <div className="row small-collapse large-uncollapse">
                <div className="small-6 columns">
                  <div className="card">
                    <div className="row small-collapse large-uncollapse">
                      <div className="small-4 columns">Personal</div>
                      <div className="small-4 columns"></div>
                      <div className="small-4 columns">{this.state.personaltimetotal}</div>
                    </div>
                    <div>{personal}</div>
                  </div>         
                </div>
                <div className="small-6 columns">
                  <div className="card">
                    <div className="row small-collapse large-uncollapse">
                      <div className="small-4 columns">Work</div>
                      <div className="small-4 columns"></div>
                      <div className="small-4 columns">{this.state.worktimetotal}</div>
                    </div>
                    <div>{work}</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
