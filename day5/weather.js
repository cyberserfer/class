

function dataLoad() {
  let cityVal = document.getElementById("entField").value;
  let promise = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityVal +'&APPID=9517a7bd6e078b6befc28058a4557f37&units=imperial')

  promise.then(data => {
    const ret = data.data;
    const city = ret.name;
    const temp = ret.main.temp;

  
    console.log(ret)
    document.getElementById("city").innerHTML =  city;
    document.getElementById("temp").innerHTML = "Temperature: " + temp;


  })

    promise.catch(err =>{
      console.log(err);
      document.getElementById("city").innerHTML = "an error occurred";
      document.getElementById("temp").innerHTML = "";
    })

  function getValue(value){
    return new Promise((resolve, reject) =>{
      setTimout(() => {
        resolve("From Promise" + value)
  //      reject(new Error("Something badhappened"))
      }, 2000)
    })
  }
}


function addListeners(){
  document.getElementById("entButton").addEventListener('click', dataLoad);
//  document.getElementById("entryField").addEventListener('input', getInput);
}


window.onload = addListeners;




