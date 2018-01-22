import React, { Component } from 'react';


class VoteBlock extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onVote(this.props.id);

  }

  render(){

    return(
      <div className="styleObject">
        <div className="circleContainer">
          <div className="circleObject"></div>
          <div className="circleNumber">{this.props.votes}</div>
        </div>
        <div>
          <div className="containerTitle">{this.props.name}</div>
        </div>
        <div className="plusContainer">
          <div name="button" className="plusButton" onClick={this.handleChange}>+</div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cans:[
        {id: 0, lib: 'React', votes: 0},
        {id: 1, lib: 'Veu', votes: 0},
        {id: 2, lib: 'Angular', votes: 0},
        {id: 3, lib: 'Ember', votes: 0}
      ]
      
    };
    this.handleVoteCount = this.handleVoteCount.bind(this);
  }

    handleVoteCount(cansId) {
      const nextCans = this.state.cans.map((cans) => {
        if(cans.id === cansId){
          return Object.assign({}, cans, {
            votes: cans.votes +1,
          });
        } else {
          return cans;
        }
      });
      this.setState({cans: nextCans});
    }

      render() {
          this.state.cans.sort((a, b) => (
            b.votes - a.votes
          ));
        const jsLibs = this.state.cans.map((cans) => (
          <VoteBlock
            key = {'lib-' + cans.id}
            id={cans.id}
            name={cans.lib}
            votes={cans.votes}
            onVote={this.handleVoteCount}
          />
        ));
          
        return (
          <div>
            <div className="pageTitle">Vote Your JS Library</div>
            {jsLibs}
          </div>
        )
      }
  }

export default App;
