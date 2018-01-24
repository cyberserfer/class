import React, { Component } from 'react';


let valField = {
  style:{
    fontSize: ".8em", 
    color: "red",
    padding: "10px"
  }
}

let inputFieldsContainer = {
  style:{
    paddingLeft: "100px"
  }
}

let inputButtonContainer = {
  style:{
    paddingLeft: "170px"
  }
}

let title = {
  style:{
    paddingLeft: "70px"
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      nameValid: false,
      emailValid: false,
      subButton: false,
      formDisplay: true // true=form false=thank you
    };

    this.valName = this.valName.bind(this);
    this.valEmail = this.valEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valName(e){
    let name = e.target.value;
    if(name.length < 8){
      this.setState({name: 'Name must have more than 8 characters'})
    }
    else{
      this.setState({name: null});
      this.setState({nameValid: true})
      this.state.nameValid && this.state.emailValid === true ? this.setState({subButton: true}) : this.setState({subButton: false})
    }
  }

  valEmail(e){
    let name = e.target.value;
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.exec(name)){
        this.setState({email: null})
        this.setState({emailValid: true})
        this.state.nameValid && this.state.emailValid === true ? this.setState({subButton: true}) : this.setState({subButton: false})
    }
    else{
        this.setState({email: 'Please enter a valid email'});
    }
    return
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({formDisplay: false });
  }

 render() {
    return (
      <div>
       {this.state.formDisplay ? <form>
        <h1 style={title.style}>Validated Form</h1>
        <div style={inputFieldsContainer.style} >
          <div>
            <input type="text" placeholder="Name" onChange= {this.valName} />
            <span style={valField.style}>{this.state.name} </span>
          </div>
          <div>
            <input type="text" placeholder="Email" onChange= {this.valEmail}/>
            <span style={valField.style}>{this.state.email} </span>
          </div>
        </div>
        <br />
        <div style={inputButtonContainer.style} >
        <button type="button" 
        disabled={!this.state.subButton} 
        onClick={this.handleSubmit}>Submit</button></div>
       </form> : <div>
         <h1 style={title.style}>Validated Form</h1>
         <div style={inputButtonContainer.style} >
          <div>Thank You</div>
        </div>
       </div>}
     </div>
    );
  }
}

export default App;
