import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';




const NoMatch = () => (
  <div><h1>Page Not Found...!</h1></div>
)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App margin-horiz-large margin-vert-large">
          <h1>GitHub Battle</h1>

            <div className="row">
              <div className="small-12 medium-10 large-8 medium-centered columns">
                
                <div className='card'>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={NoMatch} />
                  </Switch>
                </div>
              </div>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App
