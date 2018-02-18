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
import Country from './view/Country';
import Tracked from './view/Tracked';
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
              <ul className='tabs vertical'>
                <CustomNav to='/' label='Home' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/tracked' label='Tracked' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/al' label='AL' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/asen'label='ASEN' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/au'label='AU' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/cais'label='CAIS' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/caricom' label='CARICOM' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/cefta'label='CEFTA' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/eeu'label='EEU' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/efta' label='EFTA' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/eu'label='EU' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/nafta'label='NAFTA' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/pa' label='PA' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/saarc'label='SAARC' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/usan'label='USAN' generalClassName="tab-title" activeOnlyWhenExact={true} />
              </ul>
            </div>
            <div className="medium-8 large-10 columns">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/tracked' component={Tracked} />
                <Route exact path='/countries/:country' component={Country} />
                
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
