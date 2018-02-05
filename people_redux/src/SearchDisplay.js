import React, { Component } from 'react';
import { searchUser, selectedUser } from './state/actions';
import { connect } from "react-redux";

class SearchDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: "",
            usersList: [],
            users: []
        }
    }
    
   render(){

        
console.log(this.props)
    const {usersList, input, users} = this.props
    let showList = (usersList) ? usersList : users
        return (
            <div>
            <input value={input} id="searchBox" placeholder="Search..." onChange={
                (event) => {this.props.handleSearchUser(event.target.value); }}/>
            <div>
            {showList.map(showList => <li key={showList.id} onClick={() => this.props.handleSelectedUser(showList)}>{showList.name} </li>)}
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