import {animal} from "./animal.js";
//import {square} from "./square.js";
import {circuit} from "./circuit.js";

class grenouille extends animal {

  constructor (iconFrog : String/*, value : square*/) {
    super(iconFrog); /*, value*/
  }

  public move (value : circuit, command : String) : void {
    console.log("rentrée");
    var square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']")
    square!.classList.remove('frog');
    switch (command) {
      case "UP" :
      var square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + (value.frog.coordY + 1) + "']");
      square!.classList.add('frog');
      break;
      case "RIGHT" :
      break;
      case "LEFT" :
      break;
      case "DOWN" :
      break;
    }
  }



}

export {grenouille};
