import React, {Component} from 'react';
import axios from 'axios';

class Categories extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            articles: [],
            selOption: 'Technology',

        }
        this.track = this.track.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
    }

    handleRadioChange(event) {
        this.setState({selOption: event.target.value});
    }
    

    componentDidMount() {
        axios.get("https://newsapi.org/v2/sources",{
        params: {
            category: this.state.selOption,
            apiKey: "66e5e937d09540649f99072a47c18861"
        }
        })
                .then(({data: {sources}}) => {
                    console.log('get sources');
                    console.log(sources);
                    this.setState({articles: sources});
                })
                .catch(err => {
                    console.log('error retrieving data', err);
                });
        
    }

    track(val){
        console.log('inside trackCountry')
        console.log('value of val')
        console.log(val)
        // this.setState({tracked: this.state.tracked.concat(val)})

        axios.post("http://5a86fa6d492dc500121b88ba.mockapi.io/news/", {source: val})
        .then( (response) => {
            console.log('success')
        
        })
        .catch((err) => {
        console.log("error posting data", err)
        })
    }

    render(){
        const {articles} = this.state
 
        console.log('value of tracked in tracked')
        console.log(articles)
        if (articles) {
            return(
                <div>
                    <div> <h2>{this.state.selOption} Resources</h2> </div>
                    <div>
                        <input type="radio" value="Business"
                        checked={this.state.selOption === 'Business'}
                        onChange={this.handleRadioChange} /> Business
                        <input type="radio" value="Technology"
                        checked={this.state.selOption === 'Technology'}
                        onChange={this.handleRadioChange} /> Technology
                        <input type="radio" value="Science"
                        checked={this.state.selOption === 'Science'}
                        onChange={this.handleRadioChange} /> Science
                    </div>
                    <div>
                    {articles.map(article =>
                        <div className='card' key={article.idx}>
                            <div className='row'>
                               
                                <div className="small-12 medium-12 large-12 columns">
                                    <div className='row'>
                                        <div className='card'>
                                        <div>Name: {article.name}</div>
                                        <div>Description: {article.description} </div>
                                        <button onClick={() => this.track(article.name)}>Subscribe</button>
                                        </div>
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

export default Categories