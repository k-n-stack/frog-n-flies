import { animal } from "./animal.js";
class grenouille extends animal {
    constructor(iconFrog /*, value : square*/) {
        super(iconFrog); /*, value*/
    }
    move(value, command) {
        var square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']");
        var squareLeft = document.querySelector(".square[data-x='" + (value.frog.coordX - 1) + "'][data-y='" + value.frog.coordY + "']");
        var squareRight = document.querySelector(".square[data-x='" + (value.frog.coordX + 1) + "'][data-y='" + value.frog.coordY + "']");
        var squareUp = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + (value.frog.coordY - 1) + "']");
        var squareDown = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + (value.frog.coordY + 1) + "']");
        switch (command) {
            case "UP":
                if (squareUp.classList[1] == "rock") {
                    alert("Un rocher bloque le passage !");
                    return;
                }
                value.frog.coordY = value.frog.coordY - 1;
                break;
            case "RIGHT":
                if (squareRight.classList[1] == "rock") {
                    alert("Un rocher bloque le passage !");
                    return;
                }
                value.frog.coordX = value.frog.coordX + 1;
                break;
            case "LEFT":
                if (squareLeft.classList[1] == "rock") {
                    alert("Un rocher bloque le passage !");
                    return;
                }
                value.frog.coordX = value.frog.coordX - 1;
                break;
            case "DOWN":
                if (squareDown.classList[1] == "rock") {
                    alert("Un rocher bloque le passage !");
                    return;
                }
                value.frog.coordY = value.frog.coordY + 1;
                break;
        }
        square.classList.remove('frog');
        square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']");
        square.classList.add('frog');
    }
}
export { grenouille };
