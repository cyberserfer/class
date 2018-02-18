import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import DisplayItems from './components/DisplayItems';
import AddItem from './components/AddItem';
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import {get} from './store/actions';
import {connect} from 'react-redux';


const NoMatch = () => (
  <div><h1>Page Not Found...!</h1></div>
)

const Home = () => (
  <div><h1>Welcome!</h1></div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App margin-horiz-large margin-vert-large">
          <h1>Hojo Weather Forecast</h1>
          <div><Link to='/add'>Add a weather forecast</Link></div>
            <div className="row">
              <div className="small-12 medium-10 large-8 medium-centered columns">
                <Nav city={this.props.city} />
                <div className='card'>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/add' component={AddItem} />
                    <Route exact path='/:display' component={DisplayItems} />
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
const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    city: state.city
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityWeather(city){
      dispatch(get(city))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
