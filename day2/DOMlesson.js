console.log('Javascript Loaded!')
let initialValue = ''
function pageLoad() {
  initialValue = document.getElementById('myParagraph').innerHTML;
  const button = document.querySelector('#letsChangeIt');
  const input = document.querySelector('#inputId');
  const paragraph = document.querySelector('#myParagraph');
  button.addEventListener('click', changeText);
  input.addEventListener('keyup', () => {
    paragraph.innerHTML = input.value;
  })
}

function changeText(e) {
  let input = document.getElementById('inputId');
  let myParagraph = document.getElementById('myParagraph');
  console.log(input.value);
  if(initialValue !== input.value) {
    myParagraph.innerHTML = input.value;
  }
}


window.onload = pageLoad;