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
                var square = document.querySelector(".square[data-x='" + value.frog.coordX + "'][data-y='" + (value.frog.coordY + 1) + "']");
                square.classList.add('frog');
                break;
            case "RIGHT":
                break;
            case "LEFT":
                break;
            case "DOWN":
                break;
        }
    }
}
export { grenouille };
