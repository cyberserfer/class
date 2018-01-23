import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
      
    };
    this.valName = this.valName.bind(this);
    this.valEmail = this.valEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valName(e){
    let name = e.target.value;
    if(name.length < 8){
      this.setState({name: 'name must have more than 8 characters'})
    }
    else{
      this.setState({name: ''})
    }
  }

  valEmail(e){
    let name = e.target.value;
    if(name.length < 8){

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  render() {
    
    return (
     <div>
       <h1>Validated Form</h1>
       <input type="text" placeholder="Name" onChange= {this.valName} />
       <div>{this.state.name} </div>
       <input type="text" placeholder="Email" />
       <div>{this.state.email} </div>
       <br />
       <button type="button" onClick={this.handleSubmit}>Submit</button>
     </div>
    );
  }
}

export default App;
