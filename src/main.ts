import {circuit} from "./circuit.js";
import {grenouille} from "./grenouille.js";

var test : circuit = new circuit(10, 10, 0);
test.generate(20);

document.getElementById("haut")!.addEventListener("click", function() { direction("haut"); });
document.getElementById("droite")!.addEventListener("click", function() { direction("droite"); });
document.getElementById("gauche")!.addEventListener("click", function() { direction("gauche"); });
document.getElementById("bas")!.addEventListener("click", function() { direction("bas"); });

function direction(direction : String) : any {
  var frog : grenouille = new grenouille("NomIconFrog");
  if (direction == "haut") {
    console.log("gogogo gadgeto");
    frog.move(test, "UP");
  } else if (direction == "droite") {
    frog.move(test, "RIGHT");
  } else if (direction == "gauche") {
    frog.move(test, "LEFT");
  } else if (direction == "bas") {
    frog.move(test, "DOWN");
  }
}
