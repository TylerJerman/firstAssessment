console.log('Hello World!');

const idInput = document.querySelector('#idInput');
const colorInput = document.querySelector('#colorInput');

function setCard() {
  
  const card = document.querySelector('#${idInput.value}');

  card.style.color = colorInput.value;
  
  console.log(card);
} 

console.log(idInput);
console.log(colorInput);
