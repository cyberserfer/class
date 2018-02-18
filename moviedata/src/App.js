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
      plot: "",
      searched: false
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
        this.setState({searched: true})
        const {data: {Year, Director, Plot}} = result
        this.setState({year: Year})
        this.setState({director: Director})
        this.setState({plot: Plot})
        //console.log(result)
      })
      .catch((err) => {
          console.log("error retrieving data", err)
      })
  }
  
  render() {
    return (
      <div>
        <div className="row large-collapse large-uncollapse">
          <div className="large-2 columns"></div>
          <h1 className="large-8 columns">Movie Data</h1>
          <div className="large-2 columns"></div>
        </div>

        <div className="row large-collapse large-uncollapse">
          <div className="large-2 columns"></div>
          <div className="large-8 columns">
            <input type="text" onBlur={this.handleInput} />
            <button type="submit" onClick={this.handleSubmit}>Search</button>
         </div>
         <div className="large-2 columns"></div>
        </div>
        {this.state.searched &&
          <div className="row large-collapse large-uncollapse">
            <div className="large-2 columns"></div>
              <div className="large-8 columns">
                <div className="card">
                  <div className="label">Year</div><div>{this.state.year}</div>
                  <div className="label">Director</div><div>{this.state.director}</div>
                  <div className="label">Plot</div><div>{this.state.plot}</div>
                </div>
              </div>
            <div className="large-2 columns"></div>
          </div>
        }
      </div>
    );
  }
}

export default App;
