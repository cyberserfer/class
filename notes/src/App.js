import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import moment from 'moment';


function NoteCard(props) {
  
  return(
    <div className='card'>
      <div style={ {float: 'right', fontSize: '.7em', marginTop: '-10px'} }>Noted on: {moment.unix(props.created).format('dddd, MMMM Do, YYYY h:mm:ss A')}</div>
              <p>{props.note}</p>
    </div>
  );
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: '',
      notes: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    axios
        .get('http://5a83159098bd81001246c8d6.mockapi.io/notes?sortBy=createdAt&order=desc')
        .then(response => {
            console.log('get response');
            console.log(response);
            this.setState({ notes: response });
        })
        .catch(err => {
            console.log('error retrieving data', err);
        });
}
    

  handleSubmit(params) {
    axios.post("http://5a83159098bd81001246c8d6.mockapi.io/notes", {note: this.state.input})
    .then( ({response}) => {
        
      axios.get("http://5a83159098bd81001246c8d6.mockapi.io/notes?sortBy=createdAt&order=desc")
        .then((response) => {
          console.log("get response")
          console.log(response)
          this.setState({notes: response})
        })
        .catch((err) => {
          console.log("error retrieving data", err)
        })
      
    })
    .catch((err) => {
      console.log("error posting data", err)
    })
  }

  handleInput(e) {
    this.setState({input: e.target.value})
  }

  render() {
    const {data} = this.state.notes
    console.log('this is the data const')
    console.log(this.state.notes)
    return (
      <div>
        <div className="large-uncentered columns"><h1> Anonymous Notes </h1></div>
          
          <div className='card row'>
            <div className="small-1 columns"><h2>Note: </h2></div>
            <div className="small-7 columns"><input type='text' onBlur={this.handleInput} /></div>
            <div className="small-4 columns"><button className="button btn-cta success" onClick={this.handleSubmit} > Add Note </button></div>
          </div>
          <div>
          
          {data && data.map(item =>
            <div className='card' key={item.id}>
              <NoteCard created={item.createdAt} note={item.note} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
