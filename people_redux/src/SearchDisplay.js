import React, { Component } from 'react';
import { searchUser, selectedUser } from './state/actions';
import { connect } from "react-redux";

class SearchDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: "",
            usersList: []
        }
    }
    
   render(){

        
console.log(this.props)
    const {usersList=[], input, users} = this.props
        return (
            <div>
            {console.log("value of input")}{console.log(input)}
            <input value={input} id="searchBox" placeholder="Search..." onChange={
                (event) => {this.props.handleSearchUser(event.target.value); }}/>
            <div>
            {usersList.map(usersList => <li key={usersList.id} onClick={() => this.props.handleSelectedUser(usersList)}>{usersList.name} </li>)}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    usersList: state.usersList,
    users: state.users,
    input: state.input
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleSelectedUser(user){
            dispatch(selectedUser(user))
        },
        handleSearchUser(val){
            dispatch(searchUser(val))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDisplay);