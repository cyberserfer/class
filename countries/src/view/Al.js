import React, {Component} from 'react';
import axios from 'axios';

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
        this.setState({tracked: this.state.tracked.concat(val)})

        axios.post("http://5a85e22d085fdd00127042e8.mockapi.io/al/:id/tracked", {countryId: val})
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
                    <div> AL </div>
                    <div>
                    {regionInfo.map(regionInfo =>
                        <div className='card' key={regionInfo.numericCode}>
                            <div className='row'>
                                <div className="small-4 medium-4 columns">
                                    <img src={regionInfo.flag} alt="flag" />
                                </div>
                                <div className="small-4 medium-6 columns">
                                    <div>Country Name: {regionInfo.name}</div>
                                    <div>Capital: {regionInfo.capital} </div>
                                    <div>Population: {regionInfo.population} </div>
                                </div>
                                <div className="small-2 medium-2 columns">
                                    <button onClick={() => this.trackCountry(regionInfo.numericCode)}>Track</button>
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



export default Al