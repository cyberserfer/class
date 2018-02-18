import React, { Component } from 'react';
import {connect} from 'react-redux'
import noImage from '../assets/no-image-available.jpg';


class Rankings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farenheit: true
    }
  }

  
  render() {
    const {city} = this.props.match.params;
    const {weather, loadingData, loadingError} = this.props;
    return (
      <div>
        {
          loadingData ?
            <div>
              <h1 className="margin-bottom-large">{city} </h1>
              <div className="row text-center">
                <div className="small-12 medium-6 columns">
                  <span className="loading-indicator medium"></span>
                </div>
              </div>
            </div>
          :
            loadingError ?
              <div>
                <h1 className="margin-bottom-large">{city}</h1>
                <div className="row text-center">
                  <div className="small-12 columns">
                    <h2 style={ {color: 'red', fontWeight: 'bold'} }>This Was Not Found</h2>
                    <p><em>Please do something else</em></p>
                  </div>
                </div>
              </div>

              :
                  <div>
                    <h2 className="margin-bottom-large">
                      Rankings
                    </h2>
                    <div className="row margin-horiz-small margin-vert-small">

                      
                      

                    </div>
                  </div>
        }
      </div>
    );
  }

}



export default Rankings