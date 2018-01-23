import React, { Component } from 'react';


let valField = {
  style:{
    backgroundColor: "white", 
    color: "red",

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
    }
  }

  valEmail(e){
    let name = e.target.value;
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.exec(name)){
        this.setState({email: null})
        this.setState({emailValid: true})
    }
    else{
        this.setState({email: 'Please enter a valid email'});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({formDisplay: false });
  }

 render() {
    return (
      <div>
       {this.state.formDisplay ? <form>
        <h1>Validated Form</h1>
        <div>
          <input type="text" placeholder="Name" onChange= {this.valName} />
          <div style={valField.style}>{this.state.name} </div>
        </div>
        <div>
          <input type="text" placeholder="Email" onChange= {this.valEmail}/>
          <div style={valField.style}>{this.state.email} </div>
        </div>
        <br />
        <button type="button" 
        disabled={this.state.nameValid || this.state.emailValid === false ? true : false} 
        onClick={this.handleSubmit}>Submit</button>
       </form> : <div>
         <h1>Validated Form</h1>
         <div>Thank You</div>
       </div>}
     </div>
    );
  }
}

export default App;
