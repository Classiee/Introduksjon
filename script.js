var background = document.querySelector("body");
var text = document.querySelector("h1")
var colorButton = document.querySelector(".myClass");
colorButton.addEventListener("click", colorChange);

function changeColor() {

    var colorSet = [{
        background: "#f7c5cc",
        text: "#cc313d"
      },
      {
        background: "#000",
        text: "#fff"
      },
      {
        background: "#fff",
        text: "#000"
      },
      {
        background: "#234e70",
        text: "#fbf8be"
      },
      {
        background: "#fcedda",
        text: "#ee4e34"
      },
    ];
}