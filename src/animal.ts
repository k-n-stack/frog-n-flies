import {circuit} from "./circuit.js";
import {square} from "./square.js";

abstract class animal {

  private iconName : String;
  private square : square;

  constructor (iconName : String, square : square) {
    this.iconName = iconName;
    this.square = square;
  }

  public move (direction : String, ) : void {
    var obj : circuit = new circuit(0, 0, 0);
    var player = {};
    player = obj.getPlayer();
    console.log(player + " \n" + direction);
  }

}

export {animal};
