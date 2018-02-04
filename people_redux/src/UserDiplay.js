import React, { Component } from 'react';
import { connect } from "react-redux";
import { backButton } from './state/actions';

class UserDiplay extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            userToDisplay: []
        
        }
    }
    
   render(){
        let user = this.props.userToDisplay
        console.log(user)
        return (
            <div>
                    <button onClick={() => this.props.handleBackButton()}>back</button>
                    <div>
                    <ul>Name: {user.name} </ul> 
                    <ul> City: {user.city} </ul>
                    <ul> Industry: {user.industry} </ul>
                    <ul> Hobbies: {user.hobbies}</ul>
                    <ul> Email: {user.email} </ul>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userToDisplay: state.userToDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleBackButton(){
            dispatch(backButton())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDiplay);