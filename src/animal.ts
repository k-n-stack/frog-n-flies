import {circuit} from "./circuit.js";
import {square} from "./square.js";

abstract class animal {

  private iconName : String;
  //private square : square;

  constructor (iconName : String/*, square : square*/) {
    this.iconName = iconName;
    /*this.square = square;*/
  }

  public move (direction : String | circuit, command : String) : void {
  }

}

export {animal};
