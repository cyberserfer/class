import React, {Component} from 'react';
import axios from 'axios';
import {
    Switch,
    Route,
    BrowserRouter,
    Link,
    withRouter
  } from 'react-router-dom';
 //import {uniqueKey} from '../helper'
 


class Headlines extends Component {
    constructor(props){
        super(props)

        this.state = {

            top: []
        }

    }

    componentWillMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=66e5e937d09540649f99072a47c18861')
                .then(({data: {articles}}) => {
                    console.log('get articles');
                    console.log(articles);
                    this.setState({top: articles});
                })
                .catch(err => {
                    console.log('error retrieving data', err);
                });
        
    }

    
    render(){
        const {top} = this.state
        console.log('value of regionInfo from state')
        console.log(top)

        if (top) {
            return(
                <div>
                    <div> <h1>Top Headlines</h1> </div>
                    <div>
                    {top.map((article) =>
                        <div className='card' key={article.idx}>
                            <div className='row'>
                                <div className="small-4 medium-4 large-4 columns">
                                    <img src={article.urlToImage} alt="news image" />
                                </div>
                                <div className="small-8 medium-8 large-8 columns">
                                    <div className='row'>
                                    <div className="small-5 medium-4 columns"><a href={article.url} > Title: {article.title} </a></div>
                                    <div className="small-2 medium-4 columns"> ------- </div>
                                    <div className="small-5 medium-4 columns">Author: {article.author}</div>
                                    </div>
                                    <div className='row'>
                                        <div>Description: {article.description} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            )
        }
    }
}



export default Headlines