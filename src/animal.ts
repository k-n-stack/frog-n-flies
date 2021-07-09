import {circuit} from "./circuit.js";

abstract class animal {

  private iconName : String;
  //private square : square;

  constructor (iconName : String) {
    this.iconName = iconName;
  }

  public move (direction : String | circuit | {name:string, coordX:number, coordY:number}, command : String | null) : void {
  }

}

export {animal};
