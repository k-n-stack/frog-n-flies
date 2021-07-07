import { animal } from "./animal.js";
class grenouille extends animal {
    constructor(iconFrog, value) {
        super(iconFrog, value);
    }
    /*
    const button = document.querySelector("button");
    button?.addEventListener("click", handleClick:any);
  
    addEventListener (this: HTMLElement) {
        console.log("Clicked!");
        this.removeEventListener("click", handleClick);
    }*/
    move(command) {
        switch (command) {
            case "UP":
            case "RIGHT":
            case "LEFT":
            case "DOWN":
        }
    }
}
export { grenouille };
