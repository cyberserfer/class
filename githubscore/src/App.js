import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      githubResponse: null,
      githubUser: "",
      public_repos: 0,
      followers: 0,
      searched: false,
      subButton: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.enableSubmit = this.enableSubmit.bind(this)
  }
  
  gitComment(number){    
    switch(true){
      case (number === null):
        return <div></div>;
      case (number < 20):
        return <div className="text-alert">"Needs Work!"</div>;
      case (number > 20 && number < 50):
        return <div className="text-warning">"A decent start!"</div>;
      case (number > 50 && number < 100):
        return <div className="text-secondary">"Doing Well!"</div>;
      case (number > 100 && number < 200):
        return <div className="text-success">"Great Job!"</div>;
      case (number >= 200) :
        return <div className="text-info">"Github Elite!"</div>;
      default:
        return null;
    }
  }

  enableSubmit(e) {
    this.setState({subButton: true})
  }

  handleInput(e) {
    let input = e.target.value.trim()
    this.setState({githubUser: input})
  }

  handleSubmit() {
    Axios.get("https://api.github.com/users/"+this.state.githubUser)
      .then((result) => {
        this.setState({searched: true})
        const {data: {public_repos, followers}} = result
        this.setState({public_repos: public_repos})
        this.setState({followers: followers})

        this.setState({githubResponse: followers + public_repos})

        console.log(result)
      })
      .catch((err) => {
          console.log("error retrieving data", err)
          this.setState({githubResponse: "User does not exist. Please choose another user."})
      })
  }
  
  render() {
    return (
      <div className="row">
        <div className="large-6 columns">
          <div className="row">
            <div className="large-2 columns"></div>
            <h1 className="large-8 columns">Github Score</h1>
            <div className="large-2 columns"></div>
          </div>
          
          <div className="row">
            <div className="large-4 columns">
              <div>Github Username: </div>
            </div>
            <div className="large-6 columns">
              <input type="text" onKeyUp={this.enableSubmit} onBlur={this.handleInput} />
            </div>
            <div className="large-2 columns"></div>
          </div>
        
          <div className="row">
            <div className="large-12 columns">
              <button type="submit" disabled={!this.state.subButton} onClick={this.handleSubmit}>Calculate my Github Score</button>
            </div>
          </div>
        </div>

        <div className="large-6 columns">
          <div className="row">
            <div className="large-6 columns">Your Score: </div>
            <span className="large-6 columns">{this.state.githubResponse}</span>
          </div>
          <div className="row">
            <span className="large-6 columns">
             {this.gitComment(this.state.githubResponse)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;