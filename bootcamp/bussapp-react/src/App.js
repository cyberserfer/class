import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import {CustomNav} from './helper';
import Headlines from './components/Headlines';
import Categories from './components/Categories';
import Feed from './components/Feed';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  //   componentWillMount() {
  //    
  // }


  render() {


    return (
      <BrowserRouter>
        <div>

          <div className="row">
            <div className="medium-4 large-2 columns">
              <ul className='tabs horizontal'>
              <CustomNav to='/' label='Home' generalClassName="tab-title" activeOnlyWhenExact={true} />
              <CustomNav to='/categories' label='Customize' generalClassName="tab-title" activeOnlyWhenExact={true} />
              <CustomNav to='/feed' label='Personal Feed' generalClassName="tab-title" activeOnlyWhenExact={true} />

              </ul>
            </div>
            <div className="medium-8 large-10 columns">
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
  
  export default App;
