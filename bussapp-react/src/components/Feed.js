import React, {Component} from 'react';
import axios from 'axios';
import {uniqueKey} from '../helper'

class Feed extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            tracked: [],
            articles: []
        }
      
    }

    componentWillMount() {
        axios.get("http://5a85e22d085fdd00127042e8.mockapi.io/news/")
                .then(({data}) => {
                    
                    data.source.map((source) =>
                        axios.get("https://newsapi.org/v2/sources",{
                            params: {
                            name: source,
                            apiKey: "66e5e937d09540649f99072a47c18861"
                            }
                        })
                            .then(({data: {sources}}) => {
                                console.log('get sources');
                                console.log(sources);
                                this.setState({...articles, articles: sources});
                            })
                            .catch(err => {
                                console.log('error retrieving data', err);
                            })
                })
                .catch(err => {
                    console.log('error retrieving data', err);
                });
        
    }

   
    render(){
        const {articles} = this.state
 
        console.log('value of articles')
        console.log(articles)
        if (articles) {
            return(
                <div>
                    <div> Personal Feed </div>
                    <div>
                    {articles.map(article =>
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



export default Feed