import {animal} from "./animal.js";
import {square} from "./square.js";

class grenouille extends animal {

  constructor (iconFrog : String, value : square) {
    super(iconFrog, value);
  }
  /*
  const button = document.querySelector("button");
  button?.addEventListener("click", handleClick:any);

  addEventListener (this: HTMLElement) {
      console.log("Clicked!");
      this.removeEventListener("click", handleClick);
  }*/

  public move (command : String) : void {
    switch (command) {
      case "UP" : 
      case "RIGHT" :
      case "LEFT" :
      case "DOWN" :
    }
  }



}

export {grenouille};
