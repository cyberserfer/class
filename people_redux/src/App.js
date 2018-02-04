
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import UserDisplay from './UserDiplay';
import SearchDisplay from './SearchDisplay';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      appViewState: ''
    }
  }

  render() {
    const RenderComponent = this.props.appViewState
    return (
      <div>
            <RenderComponent />
      </div>
    );
  }
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
  return {
    appViewState: state.viewState
  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps)(App)