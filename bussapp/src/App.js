import React, { Component } from 'react';
import {CustomNav} from './helper';
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import './ui-toolkit/css/nm-cx/main.css';

import Headlines from './components/Headlines';
import Categories from './components/Categories';
import Feed from './components/Feed';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App margin-horiz-large margin-vert-large">
          <h1>News Me!</h1>
        
            <div className="row">
              <div className="small-12 medium-10 large-8 medium-centered columns">
              <CustomNav to='/' label='Home' generalClassName="tab-title" activeOnlyWhenExact={true} />
              <CustomNav to='/categories' label='Customize' generalClassName="tab-title" activeOnlyWhenExact={true} />
              <CustomNav to='/feed' label='Personal Feed' generalClassName="tab-title" activeOnlyWhenExact={true} />
                
                
              </div>
            </div>
            <div className="row">
                <div className='card'>
                  <Switch>
                    <Route exact path='/' component={Headlines} />
                    <Route exact path='/categories' component={Categories} />
                    <Route exact path='/feed' component={Feed} />
                  </Switch>
                </div>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App