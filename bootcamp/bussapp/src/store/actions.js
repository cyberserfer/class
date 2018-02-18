import axios from 'axios';

export const LOAD_FEED = 'LOAD_FEED';
export const LOAD_TOP = 'LOAD_TOP';

export const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=66e5e937d09540649f99072a47c18861';

export const getFeed = () => {
  return (dispatch) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=66e5e937d09540649f99072a47c18861")
      .then( (response) => {

        const {data} = response
        console.log("response")
        console.log(response)
        
        dispatch({type: LOAD_FEED, payload: response});

      })
      .catch( error => {
        if (error.response) {
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          console.log(`Error Request: ${error.request}`);
        } else {
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);

    })
  }
}

export const getTop = () => {
  return (dispatch) => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=66e5e937d09540649f99072a47c18861")
      .then( (response) => {

        const {data} = response
        console.log("response")
        console.log(response)
        
        dispatch({type: LOAD_TOP, payload: response});

      })
      .catch( error => {
        if (error.response) {
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          console.log(`Error Request: ${error.request}`);
        } else {
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);

    })
  }
}

// export const edit = (id, obj) => {
//   return (dispatch, getState, url) => {
//     console.log(`Updating Data... ${id}`);
//     console.log(ProductObj);
//     axios.put(`${url}/${id}`, obj)
//       .then( (response) => {
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in updating data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editError', result: true}} );
//     })
//   }
// }

// export const delete = (id) => {
//   return (dispatch, getState, url) => {
//     console.log(`Deleting Data... ${id}`);
//     axios.delete(`${url}/${id}`)
//       .then( (response) => {
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in deleteing data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteError', result: true}} );
//     })
//   }
// }

// export const add = (obj) => {
//   return (dispatch, getState, url) => {
//     console.log('Adding Data...');
//     console.log(obj);
//     axios.post(url, obj)
//       .then( response => {
//         console.log(response);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in adding data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addError', result: true}} );
//     })
//   }
// }