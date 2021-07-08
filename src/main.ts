import {circuit} from "./circuit.js";

var obj : circuit = new circuit(10, 10, 0);
obj.generate(20);
obj.checkGenerate();

document.getElementById("button_save")!.addEventListener("click", obj.setCookie);

document.getElementById("haut")!.addEventListener("click", function() { direction("haut"); });
document.getElementById("droite")!.addEventListener("click", function() { direction("droite"); });
document.getElementById("gauche")!.addEventListener("click", function() { direction("gauche"); });
document.getElementById("bas")!.addEventListener("click", function() { direction("bas"); });

function direction(direction : String) : any {
  if (direction == "haut") {
    obj.Turn(obj, "UP");
  } else if (direction == "droite") {
    obj.Turn(obj, "RIGHT");
  } else if (direction == "gauche") {
    obj.Turn(obj, "LEFT");
  } else if (direction == "bas") {
    obj.Turn(obj, "DOWN");
  }
}

function Save() {
  obj.setCookie();
}
