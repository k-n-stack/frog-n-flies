import { circuit } from "./circuit.js";
import { grenouille } from "./grenouille.js";
var test = new circuit(10, 10, 0);
test.generate(20);
var frog = new grenouille("NomIconFrog");
frog.move();
