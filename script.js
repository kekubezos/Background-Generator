var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body = document.getElementById('gradient');

function  selectGradient(){
    body.style.background=" linear-gradient(to right,"+ color1.value+", "+ color2.value+")";

    h3.textContent = body.style.background + ";";  //Outputs code for linear gradient.
}



 color1.addEventListener('input',selectGradient);
  color2.addEventListener('input',selectGradient);


