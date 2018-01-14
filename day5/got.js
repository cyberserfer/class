

function dataLoad(e) {
  const promise = axios.get('https://anapioficeandfire.com/api/houses/'+e.toElement.id+'/')

  promise.then(data => {
    const ret = data.data;
    const name = ret.name;
    const words = ret.words;
    const titles = ret.titles;
 //   const type = ret.types[0].type.name;
  
    console.log(ret)
    document.getElementById("houseName").innerHTML = "Name: " + name;
    document.getElementById("houseWords").innerHTML = "Words: " + words;
    document.getElementById("houseTitles").innerHTML = "Titles: " + titles;

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
/*
function putText(){
  let num = this.id;
  console.log("value of id: " + num)
  document.getElementById("myPlace" + num).innerHTML = "The button has been pushed."
}
*/
/*
(function(global){
  class MyDojoElement {
    constructor(htmlElement){
      this.htmlElement = htmlElement;
      console.log("the value of this.htmlElement is: " + this.htmlElement)
    }

    click(callback){
      this.htmlElement.addEventListener('click', callback);
      console.log("click has been clicked")
    }
  }
  

  function DojoQuery(id) {
    console.log("the value of id *** is : " + id);
    console.log("the value of gEBid *** is : " + document.getElementById(id));
    return new MyDojoElement (document.getElementById(id));
  }


global.$Dojo = DojoQuery;

}(window))

const stark = $Dojo("362");
const targaryen = $Dojo("378");
const lannister = $Dojo("230");
const baratheon = $Dojo("15");


stark.click(dataLoad);
targaryen.click(dataLoad);
lannister.click(dataLoad);
baratheon.click(dataLoad);
*/

console.log("log 2: ")

function addListeners(){
  let houseNum = [362, 378, 230, 15];
  for (let i = 0; i < houseNum.lenth; i++){
    document.getElementById(houseNum[i]).addEventListener('click', dataLoad);
    console.log("log 1: " + houseNum[i]);
  }
}

console.log("log 3: ")

window.onload = addListeners;

console.log("log 4: ")



