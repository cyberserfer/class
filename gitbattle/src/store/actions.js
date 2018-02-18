import axios from 'axios';

export const API_URL = "https://api.github.com/users/";
export const GET_PLAYER = 'GET_PLAYER';
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';



export const getPlayer = (githubUser, playerNumber) => {
  return (dispatch, getState, url) => {

    axios.get(url+githubUser)
      .then((result) => {
        const {data: {public_repos, followers}} = result
        
         
         let playerScore = (followers + public_repos) * 12

  
        dispatch( {type: GET_PLAYER, payload: {playerScore: playerScore, playerNumber: playerNumber} } );
        console.log(result)
      })
      .catch((err) => {
          console.log("error retrieving data", err)
          this.setState({githubResponse: "User does not exist. Please choose another user."})
      })
  }
}

