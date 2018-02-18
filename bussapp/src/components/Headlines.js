import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTop} from '../store/actions';


class Headlines extends Component {
    constructor(props){
        super(props)

        this.state = {
            top: '',

        }
    }

    componentDidMount() {
        this.props.appGetTop();
    }


    render(){
        
        return(
            <div>
                <h1 className="margin-bottom-large">Top Headlines</h1>
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
      top: state.top,

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      appGetTop(){
        dispatch(getTop())
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Headlines)