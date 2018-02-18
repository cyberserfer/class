import React, { Component } from 'react';
import { connect } from 'react-redux'
import { get } from '../store/actions';
import noImage from '../assets/no-image-available.jpg';
import Player1 from './Player1';

import {
    Switch,
    Route,
    BrowserRouter,
    Link
} from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: false  // false dipslays the search screen true shows the results display
        }
    }

    componentDidMount() {
        this.props.flagReset();
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { city } = this.props.match.params;
        const { weather, loadingData, player1Screen } = this.props;
        return (
            <div>   
                <h1 className="margin-bottom-large">Player 1</h1>
                <div className="row margin-horiz-small margin-vert-small">

                    <div className="small-12 medium-6 columns">
                        
                            <Player1 />

                            <button className="button btn-cta">Git User</button>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Home