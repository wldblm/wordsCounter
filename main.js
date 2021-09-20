import './style.css'

const button = document.getElementById('button');
const result = document.getElementById('result');

button.addEventListener('click', (e)=> {
  e.preventDefault();
  counter();
})

function counter(){
let words = document.getElementById('words').value ;
var array = words.trim().split(" ");
var wordsNumber = (array.length); 

if(array.length == 1){
  result.innerHTML = `You wrote ${wordsNumber} word`;
  
}
else if(array.length === 0){
  result.innerHTML = `You didn't write sh*t`;

}
else{
  result.innerHTML = `You wrote ${wordsNumber} words`;
  
}

}