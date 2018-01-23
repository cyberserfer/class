
function checkRadio(radButton){
  for (var i = 0, length = radButton.length; i < length; i++)
  {
   if (radButton[i].checked)
   {
    return radButton[i].value;
    // only one radio can be logically checked, don't check the rest
    break;
   }
  }
}

function dataLoad() {
  let cityVal = document.getElementById("entField").value;
  let radioVal = document.getElementsByName("corf");
  console.log(radioVal);
  let tempVal = checkRadio(radioVal);
  let tempUnit = "";
  tempVal === "faren" ? tempUnit = "imperial" : tempUnit = "metric"

  let promise = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityVal +'&APPID=weatheridgoeshere&units=' + tempUnit)

  promise.then(data => {
    const ret = data.data;
    const city = ret.name;
    const temp = Math.round(ret.main.temp);
    const precip = ret.weather[0].main;

    //evaluate what king of precip
    switch(precip.toLowerCase()){
      case "snow":
        document.body.style.backgroundColor = "#b3b4c9";
        document.body.style.color = "#0a4f93";
        precipImg = "13d"
        break;

      case "rain":
        document.body.style.backgroundColor = "#a0a0a0";
        document.body.style.color = "#0071e2";
        precipImg = "10d"
        break;

      case "haze":
        document.body.style.backgroundColor = "#969e94";
        document.body.style.color = "#4c4c4c";
        precipImg = "50d"
        break;

      case "clouds":
        document.body.style.backgroundColor = "#d1d1d1";
        document.body.style.color = "#000000";
        precipImg = "03d"
        break;

      default:
        document.body.style.backgroundColor = "#f9dd86";
        document.body.style.color = "#77170a";
        precipImg = "01d"
    }
    //build url to display precip image
    let icon = "<img src=http://openweathermap.org/img/w/"+ precipImg + ".png />"

    //display values on page
    document.getElementById("city").innerHTML = city;
    document.getElementById("precip").innerHTML = precip;
    document.getElementById("precipicon").innerHTML = icon;
    document.getElementById("temp").innerHTML = "Temperature: " + temp;

    //commit values to local storage
    localStorage.setItem('lsRadioVal', radioVal);
    localStorage.setItem('lsCity', city);
    localStorage.setItem('lsPrecip', precip);
    localStorage.setItem('lsPrecipIcon', icon);
    localStorage.setItem('lsTemp', temp);

  })

  promise.catch(err =>{
    document.getElementById("city").innerHTML = "An error occurred <br> Please try again";
    document.getElementById("temp").innerHTML = "";
  })
}


function loadPage(){
  document.getElementById("entButton").addEventListener('click', dataLoad)

//local storage test function
  function storageAvailable(type) {
      try {
          var storage = window[type],
              x = '__storage_test__';
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
      }
      catch(e) {
          return e instanceof DOMException && (
              // everything except Firefox
              e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === 'QuotaExceededError' ||
              // Firefox
              e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
              // acknowledge QuotaExceededError only if there's something already stored
              storage.length !== 0;
      }
  }

//Use local storage test function
//If storage available
  if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    console.log("storage available")
    // test local storage to see if person has used app before
    if(!localStorage.getItem('lsCity')) {
      document.getElementById("city").innerHTML = "Welcome to the Get Weather App";
    } else {
    //If person has been here before load their previous data from storage  
      //document.getElementById("city").innerHTML = localStorage.setItem('lsRadioVal', radioVal);
      document.getElementById("city").innerHTML = localStorage.getItem('lsCity') + " (note: this is stale data)";
      document.getElementById("precip").innerHTML = localStorage.getItem('lsPrecip');
      document.getElementById("precipicon").innerHTML = localStorage.getItem('lsPrecipIcon');
      document.getElementById("temp").innerHTML = localStorage.getItem('lsTemp');
    }
  }
  else {
    // Too bad, no localStorage for us
    console.log("storage IS NOT available")
  }
}

window.onload = loadPage;




