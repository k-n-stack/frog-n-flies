import {animal} from "./animal.js";
import {circuit} from "./circuit.js";

class grenouille extends animal {

  constructor (iconFrog : String) {
    super(iconFrog);
  }

  public move (value : circuit, command : String) : void {
    var square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']");
    var squareLeft = document.querySelector(".square[data-x='" + (value.frog.coordX - 1) + "'][data-y='" + value.frog.coordY + "']");
    var squareRight = document.querySelector(".square[data-x='" + (value.frog.coordX + 1) + "'][data-y='" + value.frog.coordY + "']");
    var squareUp = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + (value.frog.coordY - 1) + "']");
    var squareDown = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + (value.frog.coordY + 1) + "']");

    switch (command) {
      case "UP" :
      if (squareUp) {
        if (squareUp!.classList[1] == "rock") {
          alert("Un rocher bloque le passage !");
          return;
        }
        if (squareUp!.classList[1] == "fly") {
          squareUp!.classList.remove("fly");
          value.score = value.score + 1;
        }
      }
      if (value.frog.coordY - 1 == 0) {
        alert("c'est en dehors de l'espace !");
        return;
      }
      value.frog.coordY = value.frog.coordY - 1;
      break;

      case "RIGHT" :
      if (squareRight) {
        if (squareRight!.classList[1] == "rock") {
          alert("Un rocher bloque le passage !");
          return;
        }
        if (squareRight!.classList[1] == "fly") {
          squareRight!.classList.remove("fly");
          value.score = value.score + 1;
        }
      }
      if (value.frog.coordX + 1 == 11) {
        alert("c'est en dehors de l'espace !");
        return;
      }
      value.frog.coordX = value.frog.coordX + 1;
      break;

      case "LEFT" :
      if (squareLeft) {
        if (squareLeft!.classList[1] == "rock") {
          alert("Un rocher bloque le passage !");
          return;
        }
        if (squareLeft!.classList[1] == "fly") {
          squareLeft!.classList.remove("fly");
          value.score = value.score + 1;
        }
      }
      if (value.frog.coordX - 1 == 0) {
        alert("c'est en dehors de l'espace !");
        return;
      }
      value.frog.coordX = value.frog.coordX - 1;
      break;

      case "DOWN" :
      if (squareDown) {
        if (squareDown!.classList[1] == "rock") {
          alert("Un rocher bloque le passage !");
          return;
        }
        if (squareDown!.classList[1] == "fly") {
          squareDown!.classList.remove("fly");
          value.score = value.score + 1;
        }
      }
      if (value.frog.coordY + 1 == 11) {
        alert("c'est en dehors de l'espace !");
        return;
      }
      value.frog.coordY = value.frog.coordY + 1;
      break;

    }

    square!.classList.remove('frog');
    square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']");
    square!.classList.add('frog');
    return;
  }



}

export {grenouille};
