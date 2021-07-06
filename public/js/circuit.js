import { animal } from "./animal";
class circuit {
    constructor() { }
    generate() {
        const obj = new animal();
        this.buildMap();
        obj.setPlayer();
    }
    buildMap() {
        document.getElementById('container-circuit').innerHTML = ""; // réinitialise la carte
        var el = document.getElementById('container-circuit');
        for (var i = 0; i < 10; i++) { // genere une carte de 10 sur 10
            var row = document.createElement('div');
            row.setAttribute("class", "row"); // attribution classe row
            el.appendChild(row); // Ligne
            for (var j = 0; j < 10; j++) {
                var col = document.createElement('div');
                col.setAttribute("class", "square"); // attribution classe row
                col.setAttribute("data-x", (j + 1).toString()); // attribution attribut data-x
                col.setAttribute("data-y", (i + 1).toString()); // attribution attribut data-y
                col.setAttribute("type", ""); // attribution attribut type (vide/blocked/mouche/player)
                col.setAttribute("mouches", "");
                row.appendChild(col);
            }
        }
    }
}
const start = new circuit();
start.generate();
