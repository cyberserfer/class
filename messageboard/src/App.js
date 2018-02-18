import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      users: [],
      username: '',
      email: '',
      avatar: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }


  addUser() {
    const userObj = {
      username: this.state.username,
      email: this.state.email,
      avatar: this.state.avatar
    }

    axios.post("http://5a747e5961c2a40012894aae.mockapi.io/api/v1/users", userObj)
    .then(({response}) => {
      this.getUsers();
    })
  }

handleChange(e) {
  this.setState({[e.target.name]: e.target.value})
}

  componentDidMount(){
    console.log("inside")
    this.getUsers()
}

getUsers() {
  axios.get("http://5a747e5961c2a40012894aae.mockapi.io/api/v1/users")
    .then(({data: users}) => {
      this.setState({users})
    })
}
   
  render() {
    const {email, username, avatar} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <form>
          <div>Username: </div><input name="usernmame" type="text" value={username} onChange={this.handleChange} />
          <div>Email: </div><input name="email" type="text" value={email} onChange={this.handleChange} />
          <div>Avatar: </div><input name="avatar" type="text" value={avatar} onChange={this.handleChange} />
        </form>


        {this.state.users.map((user) => (
          <p key={user.id}>{user.username}</p>
          ))}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
