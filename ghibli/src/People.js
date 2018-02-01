import './App.css'
import React, { Component } from 'react';
import {getPeopleFromURL} from './retrievePeople';
import { connect } from 'react-redux';
import female from './img/Female-Avatar.png'
import male from './img/Male-Avatar.png'
import {
    PERSON_SELECTED
} from "./state/actions"


class People extends Component {

 componentDidMount() {
     console.log(female)
    this.props.getPeople("https://ghibliapi.herokuapp.com/people") 
    }
    render(){
        let list = null ; 
        console.log(this.props)
        if (this.props.peopleList)
        list = this.props.peopleList.map((person,id) => <img key={id} onClick={()=> this.props.personClicked(person)} src={person.gender === "Female" ? female : male}></img>)
        return (
            <div className="top">
                <div className="peopleContainer">
                    {list}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingPeopleStatus: state.loadingPeopleStatus,
        peopleList: state.peopleList

    };
};



const mapDispatchToProps = (dispatch) => {

    return {
        getPeople: (url) => dispatch(getPeopleFromURL(url)), 
        personClicked (person){
            dispatch({type: PERSON_SELECTED, payload: person})
        }
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
