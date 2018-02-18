import React, {Component} from 'react';
import axios from 'axios';
import {numberWithCommas} from '../helper';
import {
    Switch,
    Route,
    BrowserRouter,
    Link,
    withRouter
  } from 'react-router-dom';
 


class Al extends Component {
    constructor(props){
        super(props)

        this.state = {
            regionInfo: [],
            tracked: []
        }
        this.trackCountry = this.trackCountry.bind(this)
    }

    componentWillMount() {
        axios.get('https://restcountries.eu/rest/v2/regionalbloc/al')
                .then(({data}) => {
                    console.log('get response');
                    console.log(data);
                    this.setState({regionInfo: data});
                })
                .catch(err => {
                    console.log('error retrieving data', err);
                });
        
    }

    trackCountry(val){
        console.log('inside trackCountry')
        // this.setState({tracked: this.state.tracked.concat(val)})

        axios.post("http://5a85e22d085fdd00127042e8.mockapi.io/tracked/", {val})
        .then( (response) => {
            console.log('success')
        
        })
        .catch((err) => {
        console.log("error posting data", err)
        })
    }

    render(){
        const {regionInfo, tracked} = this.state
        console.log('value of regionInfo from state')
        console.log(regionInfo)
        console.log('value of tracked')
        console.log(tracked)
        if (regionInfo) {
            return(
                <div>
                    <div> <h1>AL</h1> </div>
                    <div>
                    {regionInfo.map(country =>
                        <div className='card' key={country.numericCode}>
                            <div className='row'>
                                <div className="small-4 medium-4 columns">
                                    <img src={country.flag} alt="flag" />
                                </div>
                                <div className="small-4 medium-6 columns">
                                    <div>Country Name: <Link to={`/countries/${country.name}`}> {country.name}</Link></div>
                                    <div>Capital: {country.capital} </div>
                                    <div>Population: {numberWithCommas(country.population)} </div>
                                </div>
                                <div className="small-2 medium-2 columns">
                                    <button onClick={() => this.trackCountry(country)}>Track</button>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            )
        }
    }
}



export default withRouter(Al)