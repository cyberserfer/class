import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getFeed} from '../store/actions';
 


class Feed extends Component {
    constructor(props){
        super(props)

        this.state = {
            feed: '',

        }
    }

    componentDidMount() {
        this.props.appGetFeed();
    }


    render(){
        const {newCity} = this.state;

        return(
            <div>
                <h1 className="margin-bottom-large">Personal Feed</h1>
                <div className="row margin-horiz-small margin-vert-small">

                    <div className="small-12 medium-6 columns">
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      feed: state.feed,


    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      appGetFeed(){
        dispatch(getFeed())
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Feed)