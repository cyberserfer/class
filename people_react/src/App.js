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
  input: ''
}



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialState
    }
   
    this.handleSearch = this.handleSearch.bind(this)

  }
  
  nameList(props) {
    const { users: {user} } = props;
    return (
        <div>
          <p key={user.id}>{user.name}</p>
        </div>
    );
};

  handleSearch(e) {
    const { initialState } = this.state;
    const findChars = e.target.value;
    this.setState({
        initialState: {
            ...initialState,
            input: findChars
        }
    });
}

  
  render() {
    const { initialState: { users } } = this.state;
    let {input} = this.state;
    console.log("this is the value of input")
    console.log(users.filter(input))
    let userMap = {this.users.map(() => <p key={user.id}>{user.name}</p>)}
    let filterUsers = usserMap.filter((input) => {
      return users.name.indexOf(input) !== -1;  //could use .contains????
    })

    return (
        <div>
            <input id="nameInput" onChange={this.handleSearch} />
            <div>
                
            </div>
        </div>
    );
  }
}


export default App;
