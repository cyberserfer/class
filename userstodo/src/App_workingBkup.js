import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

function HomeView() {
return(
   <card>
        <div>Users</div>
        <div>and</div>
        <div>Todos</div>
    </card>
  )
}

function UsersView() {
  return(
     <div>
     <ul>
       <Link to='/users/user1'><li>User 1</li></Link>
       <Link to='/users/user2'><li>User 2</li></Link>
       <Link to='/users/user3'><li>User 3</li></Link>
       <Link to='/users/user4'><li>User 4</li></Link>
     </ul>
     <Route path='/users/user1' component={User1} />
     <Route path='/users/user2' component={User2} />
     <Route path='/users/user3' component={User3} />
     <Route path='/users/user4' component={User4} />
   </div>
  )
}

function User1() {
  return(
    <div>
      <hr />
      <div>User 1</div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    </div>
  )
}

function User2() {
  return(
    <div>
      <hr />
      <div>User 2</div>
      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
    </div>
  )
}

function User3() {
  return(
    <div>
      <hr />
      <div>User 3</div>
      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
    </div>
  )
}

function User4() {
  return(
    <div>
      <hr />
      <div>User 4</div>
      <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
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

function Todo1() {
  return(
    <div>
      <hr />
      <div>Todo 1</div>
      <p>id est laborum et dolorum fuga.</p>
    </div>
  )
}

function Todo2() {
  return(
    <div>
      <hr />
      <div>Todo 2</div>
      <p> Nam libero tempore, cum soluta nobis est eligendi optio minus id max assumenda est, omnis dolor repellendus. </p>
    </div>
  )
}

function Todo3() {
  return(
    <div>
      <hr />
      <div>Todo 3</div>
      <p>autem quibusdam et  ut et voluptates repudiandae non recusandae.</p>
    </div>
  )
}

function Todo4() {
  return(
    <div>
      <hr />
      <div>Todo 4</div>
      <p> ut aut reiciendis voluptatibus maiores alias doloribus asperiores repellat.</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul class='tabs'>
            <Link to='/'><li class='tab-title'><button>Home</button></li></Link>
            <Link to='/users'><li class='tab-title'><button>Users</button></li></Link>
            <Link to='/todos'><li class='tab-title'><button>Todos</button></li></Link>
          </ul>
          
          <Route exact path='/' component={HomeView} />
          <Route exact path='/users' component={UsersView} />
          <Route path='/users/:userName' component={UsersView} />
          <Route exact path='/todos' component={TodosView} />
          <Route path='/todos/:todoId' component={TodosView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
