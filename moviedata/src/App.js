import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: "",
      processedInput: "",
      year: "",
      director: "",
      plot: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  
  handleInput(e) {
    let input = e.target.value.trim()
    this.setState({userInput: input})
    let submitInfo = input.replace(" ", "+")
    this.setState({processedInput: submitInfo})
  }

  handleSubmit() {
    console.log(this.state.userInput)
    Axios.get("http://www.omdbapi.com/?apikey=ecb1f5e2&t="+this.state.processedInput)
      .then((result) => {
        //const {data} = 
        const {data: {Year, Director, Plot}} = result
        this.setState({year: Year})
        this.setState({director: Director})
        this.setState({plot: Plot})
        console.log(result)
      })
      .catch((err) => {
          console.log("error retrieving data", err)
      })
  }

  
  render() {
    return (
      <div>
        <div>
          <h1>Movie Data</h1>
          <input type="text" onBlur={this.handleInput} /><button type="submit" onClick={this.handleSubmit}>Search</button>
        </div>
        <div>Year</div><div>{this.state.year}</div>
        <div>Director</div><div>{this.state.director}</div>
        <div>Plot</div><div>{this.state.plot}</div>
      </div>
    );
  }
}

export default App;
