import React, { Component } from 'react';

const genId = (str1, str2, str3) => {
  const megaStr = '' + str1 + str2 + str3;
  const chars = [];
  for(let i = 0; i < megaStr.length; i++) {
    const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
    if (randomVal % 3 === 0) {
      chars.push(i);
    } else {
      chars.push(String.fromCharCode(randomVal));
    } if(i === str1.length || i === str2.length) chars.push('-')
  }
  return chars.join('');
}

class User {
  constructor(
    name,
    city,
    industry,
    hobbies,
    email
  ) {
    this.name = name;
    this.city = city;
    this.industry = industry;
    this.hobbies = hobbies;
    this.email = email;
    this.id = genId(email, industry, city);
  }
}

const initialState = {
  userPage: undefined,
  users: [
    new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
    new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
    new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
    new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
    new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
    new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
    new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
  ],
  input: '',
  dispRes: true
}



class App extends Component {
  constructor(props){
    super(props)
    this.state = initialState

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }

  handleSelect(userId, event) {

    console.log("its alive")
    console.log(userId)
    let displayUser = this.state.users.filter( (user) => {
      return user.id.indexOf(userId) !== -1;
    })
    let {user} = displayUser;

    console.log(displayUser)
    console.log(user)
    

  }

  handleChange(event){
    this.setState({input: event.target.value})
  }


  render() {
    let filteredUsers = this.state.users.filter( (user) => {
        return user.name.toLowerCase().indexOf(this.state.input) !== -1;
      }
    )
    console.log(filteredUsers)

    return (
      this.state.dispRes === true ?
      
        <div>
            <input id="searchBox" placeholder="Search..." onChange={this.handleChange}/>
            <div>
              {filteredUsers.map(users => <ul key={users.id} onClick={(event) => this.handleSelect(users.id, event)}>{users.name} </ul>)}
            </div>
        </div>
      :
        <div>
          <h1> stuff </h1>
        </div>
      
    );
  }
}

export default App;
