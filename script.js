var background = document.querySelector("body");
var text = document.querySelector("h1")
var colorButton = document.querySelector(".myClass");
colorButton.addEventListener("click", colorChange);

function changeColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
 
  document.body.style.backgroundColor = randomColor;
}