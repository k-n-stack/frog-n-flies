import { circuit } from "./circuit.js";
class animal {
    constructor(iconName, square) {
        this.iconName = iconName;
        this.square = square;
    }
    move(direction) {
        var obj = new circuit(0, 0, 0);
        var player = {};
        player = obj.getPlayer();
        console.log(player + " \n" + direction);
    }
}
export { animal };
