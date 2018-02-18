import React, {Component} from 'react';
import axios from 'axios';

class Tracked extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            tracked: []
        }
        this.trackCountry = this.trackCountry.bind(this)
    }

    componentWillMount() {
        axios.get("http://5a85e22d085fdd00127042e8.mockapi.io/tracked/")
                .then(({data}) => {
                    console.log('Tracked get response');
                    console.log(data);
                    this.setState({tracked: data});
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
        const {tracked} = this.state
 
        console.log('value of tracked in tracked')
        console.log(tracked)
        if (tracked) {
            return(
                <div>
                    <div> AL </div>
                    <div>
                    {tracked.map(country =>
                        <div className='card' key={country.val.numericCode}>
                            <div className='row'>
                                <div className="small-4 medium-4 columns">
                                    <img src={country.val.flag} alt="flag" />
                                </div>
                                <div className="small-4 medium-6 columns">
                                    <div>Country Name: {country.val.name}</div>
                                    <div>Capital: {country.val.capital} </div>
                                    <div>Population: {country.val.population} </div>
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



export default Tracked