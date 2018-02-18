import React, {Component} from 'react';
import axios from 'axios';



class Country extends Component {



    render(){
        return(

            <div>{this.props.match.params.country}</div>
        )
    }
}

export default Country