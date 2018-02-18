import './App.css'
import React, { Component } from 'react';
import {getFilmsFromURL} from './retrievePeople';
import { connect } from 'react-redux';

class Films extends Component {

    componentDidMount() {
      
   }
}
   const mapStateToProps = (state) => {
       return {
        
       };
   };
   
   
   
   const mapDispatchToProps = (dispatch) => {
       return {
          
       }
   
   };
   
   export default connect(mapStateToProps, mapDispatchToProps)(Films);
   