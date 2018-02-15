import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';

import Al from './view/Al';
import Asean from './view/Asean';
import Au from './view/Au';
import Cais from './view/Cais';
import Caricom from './view/Caricom';
import Cefta from './view/Cefta';
import Eeu from './view/Eeu';
import Efta from './view/Efta';
import Eu from './view/Eu';
import Nafta from './view/Nafta';
import Pa from './view/Pa';
import Saarc from './view/Saarc';
import Usan from './view/Usan';

const Home = () => (
  <div><h1>Welcome!</h1></div>
)

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
              <ul>
                <li><Link to='/al'>AL</Link></li>
                <li><Link to='/asen'>ASEN</Link></li>
                <li><Link to='/au'>AU</Link></li>
                <li><Link to='/cais'>CAIS</Link></li>
                <li><Link to='/caricom' >CARICOM</Link></li>
                <li><Link to='cefta'>CEFTA</Link></li>
                <li><Link to='eeu'>EEU</Link></li>
                <li><Link to='/efta' >EFTA</Link></li>
                <li><Link to='/eu' >EU</Link></li>
                <li><Link to='/nafta'>NAFTA</Link></li>
                <li><Link to='/pa' >PA</Link></li>
                <li><Link to='/saarc'>SAARC</Link></li>
                <li><Link to='/usan'>USAN</Link></li>
              </ul>
            </div>
            <div className="medium-8 large-10 columns">
              <Switch>
                <Route exact path='/' component={Home} />
                
                <Route path='/al' component={Al} />
                <Route path='/asean' component={Asean} />
                <Route path='/au' component={Au} />
                <Route path='/cais' component={Cais} />
                <Route path='/caricom' component={Caricom} />
                <Route path='/cefta' component={Cefta} />
                <Route path='/eeu' component={Eeu} />
                <Route path='/efta' component={Efta} />
                <Route path='/eu' component={Eu} />
                <Route path='/nafta' component={Nafta} />
                <Route path='/pa' component={Pa} />
                <Route path='/saarc' component={Saarc} />
                <Route path='/usan' component={Usan} />

              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
      );
    }
  }
  
  export default App;
