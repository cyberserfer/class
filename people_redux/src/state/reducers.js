import {DISPLAY_USER, BACK_BUTTON, SEARCH_USER, SELECTED_USER} from './actions';
import UserDisplay from '../UserDiplay';
import SearchDisplay from '../SearchDisplay';

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
   
    users: [
      new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
      new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
      new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
      new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
      new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
      new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
      new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
    ],
    viewState: SearchDisplay,
    input: "",
    userToDisplay: [],
    filteredUsersList: []
  
  }


  export default function reducer(state=initialState, action) {
    switch(action.type) {
      case DISPLAY_USER:{
        return {...state};
      }
      case SEARCH_USER:
        //const {input} = action.payload
        console.log("in search user")
        console.log(action.payload)
        const { users, filteredUsersList } = state;
        console.log("value of users")
        console.log(users)
        console.log("value of filteredUsersList")
        console.log(!filteredUsersList)
        let filteredUsers = users.filter( (user) => user.name.toLowerCase().includes(action.payload.toLowerCase()));
        console.log("value of filteredUsers")
        console.log(filteredUsers)
        return {...state, 
          filteredUsersList: filteredUsers,
          usersList: filteredUsers, 
          input: action.payload
        };
     
      case SELECTED_USER:
        return {...state, 
          viewState: UserDisplay,
          userToDisplay: action.payload
        };

      case BACK_BUTTON:
        return {...state, 
          viewState: SearchDisplay
        };

      default:
        return state;
    }
  }

   