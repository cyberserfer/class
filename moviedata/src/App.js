import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  
  
  Axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=ecb1f5e2").then((result) => {
    console.log(res)
}).catch((err) => {
    console.log("error retrieving data", err)
})

  
  render() {
    return (
      <div>
        <h1>Movie Data</h1>
        <form>
          <input type="text" /><button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
