import React, { Component } from 'react';
import {getPlayer} from '../store/actions';

class Player1Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            playerName: '',
            playerNumber: 'player1'
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {playerName, playerNumber} = this.state;
        
        return {
            
                    <div>
                        <input id='playerName' name="playerName" type='text' onInput={this.handleInput} required />
                        <label htmlFor="playerName">GitHub Username</label>
                        <button className="button btn-cta">Git User</button>
                    </div>

        }
    }
}

export default Player1