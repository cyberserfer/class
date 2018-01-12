

function dataLoad(e) {const promise = axios.get('https://pokeapi.co/api/v2/pokemon/'+e.toElement.id+'/')

  promise.then(data => {
    const ret = data.data;
    const name = ret.name;
    const height = ret.height;
    const weight = ret.weight;
    const type = ret.types[0].type.name;
    const img = '<img src=\"pokemon/'+ret.id+'.png\" /> '


    console.log(type)
    console.log(ret)
    document.getElementById("pokeImg").innerHTML = img;
    document.getElementById("pokeName").innerHTML = name;
    document.getElementById("pokeHeight").innerHTML = height;
    document.getElementById("pokeWeight").innerHTML = weight;
    document.getElementById("pokeType").innerHTML = type;
  })

    promise.catch(err =>{
      console.log(err);
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

function pageLoad() {

  //let counter = 1;

  for (let i = 1; i <= 151; i++) {

    let imgDiv = document.getElementById("imgDiv");

    let imgName = JSON.stringify(i) + ".png";
    let imgTag = document.createElement("img");
    imgTag.src = "pokemon/" + imgName;
    imgTag.id = i;

    imgDiv.appendChild(imgTag);
    imgTag.addEventListener("click", dataLoad);
  }
}


window.onload = pageLoad;