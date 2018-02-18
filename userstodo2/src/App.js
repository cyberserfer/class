import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


const state = {
  todo: {
    title: '',
    content: ','
  }, 
  user: {
    name: ''
  },
  users: [{name: '', id: '',  }]
  todos: [{id: '', title: '', content: '', user_id: ''}]
}
function HomeView() {
return(
   <div className='row'>
        <div className='card small-3 small-centered columns'>
          <h1>
            <div>Users</div>
            <div>and</div>
            <div>Todos</div>
          </h1>
        </div>
    
    </div>
  )
}

function UsersView() {
  return(
     <div>
     
       <Link to='/users/user1'><li>User 1</li></Link>
       <Link to='/users/user2'><li>User 2</li></Link>
       <Link to='/users/user3'><li>User 3</li></Link>
       <Link to='/users/user4'><li>User 4</li></Link>
     
     <Route path='/users/user1' component={User1} />
     <Route path='/users/user2' component={User2} />
     <Route path='/users/user3' component={User3} />
     <Route path='/users/user4' component={User4} />
   </div>
  )
}


function TodosView() {
  return(
    <div>
      <ul>
        <Link to='/todos/todo1'><li>Todo 1</li></Link>
        <Link to='/todos/todo2'><li>Todo 2</li></Link>
        <Link to='/todos/todo3'><li>Todo 3</li></Link>
        <Link to='/todos/todo4'><li>Todo 4</li></Link>
      </ul>
      <Route path='/todos/todo1' component={Todo1} />
      <Route path='/todos/todo2' component={Todo2} />
      <Route path='/todos/todo3' component={Todo3} />
      <Route path='/todos/todo4' component={Todo4} />
    </div>
  )
}


const NmTab = ({to, exact, label}) => (
   <Route exact={exact} path={to} children={({match}) => {
    return(
        <li className={`tab-title ${match ?'active': ''} `}>
            <Link to={to} >{label}</Link>
        </li>
    )
 }}/>
)

const ButtonGroup = props => (
  <nav>
  <ul class='tabs'>
            <NmTab exact={true} to='/' label='Home' />
            <NmTab to='/todos' label='Todos' />
            <NmTab to='/users' label='Users' />
          </ul>
  </nav>
)

function updateUsers() {

}

class Users extends Component {
  render() {
  
  
  }
}

class App extends Component {
  cosnstructor(props){
    super(props);

    this.state = state
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route exact path='/users' render={({match}) => ()
          <Users 
          match={match}
          userData={this.state.user}
          users={this.state.users} 
          updateUsers={this.updateUsers} 
        )} />
          <ButtonGroup />
          
          <Route exact path='/' component={HomeView} />
          
          <Route path='/users/:userName' component={UsersView} />
          <Route exact path='/todos' component={TodosView} />
          <Route path='/todos/:todoId' component={TodosView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
