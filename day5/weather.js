
function checkRadio(radButton){

for (var i = 0, length = radButton.length; i < length; i++)
{
 if (radButton[i].checked)
 {
  // do whatever you want with the checked radio
  return radButton[i].value;
  // only one radio can be logically checked, don't check the rest
  break;
 }
}

}


function dataLoad() {
  let cityVal = document.getElementById("entField").value;
  let radioVal = document.getElementsByName("corf");
  let tempVal = checkRadio(radioVal);
  let tempUnit = "";
  console.log("value of tempVal: " + tempVal);
  tempVal === "faren" ? tempUnit = "imperial" : tempUnit = "metric"
    console.log("value of tempUnit: " + tempUnit);
  let promise = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityVal +'&APPID=9517a7bd6e078b6befc28058a4557f37&units=' + tempUnit)

  promise.then(data => {
    const ret = data.data;
    const city = ret.name;
    const temp = Math.round(ret.main.temp);
    const precip = ret.weather[0].main;

    switch(precip.toLowerCase()){
      case "snow":
        document.body.style.backgroundColor = "#b3b4c9";
        document.body.style.color = "#0a4f93";
        break;

      case "rain":
        document.body.style.backgroundColor = "#a0a0a0";
        document.body.style.color = "#0071e2";
        break;

      case "haze":
        document.body.style.backgroundColor = "#969e94";
        document.body.style.color = "#4c4c4c";
        break;

      case "clouds":
        document.body.style.backgroundColor = "#d1d1d1";
        document.body.style.color = "#000000";
        break;

      default:
        document.body.style.backgroundColor = "#f9dd86";
        document.body.style.color = "#77170a";
    }

    console.log(ret)
    document.getElementById("city").innerHTML =  city;
    document.getElementById("temp").innerHTML = "Temperature: " + temp;

  })

  promise.catch(err =>{
    document.getElementById("city").innerHTML = "An error occurred <br> Please try again";
    document.getElementById("temp").innerHTML = "";
  })
}


function addListeners(){
  document.getElementById("entButton").addEventListener('click', dataLoad)
}


window.onload = addListeners;




