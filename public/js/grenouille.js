import { animal } from "./animal.js";
class grenouille extends animal {
    constructor(iconFrog /*, value : square*/) {
        super(iconFrog); /*, value*/
    }
    move(value, command) {
        console.log("rentrée");
        var square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']");
        square.classList.remove('frog');
        switch (command) {
            case "UP":
                value.frog.coordY = value.frog.coordY - 1;
                break;
            case "RIGHT":
                value.frog.coordX = value.frog.coordX + 1;
                break;
            case "LEFT":
                value.frog.coordX = value.frog.coordX - 1;
                break;
            case "DOWN":
                value.frog.coordY = value.frog.coordY + 1;
                break;
        }
        square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + value.frog.coordY + "']");
        square.classList.add('frog');
    }
}
export { grenouille };
