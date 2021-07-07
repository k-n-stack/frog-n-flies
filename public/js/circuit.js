var player = {
    name: "Grenouille",
    coordX: 0,
    coordY: 0,
    css_class: "frog", // classe
};
class circuit {
    constructor(longueurCircuit, largeurCircuit, score) {
        this.longueurCircuit = longueurCircuit;
        this.largeurCircuit = largeurCircuit;
        this.score = score;
    }
    generate(nombreMouche) {
        this.generateMap(this.longueurCircuit, this.largeurCircuit);
        this.generateRocks();
        this.generateFlies(nombreMouche);
        this.generateFrog();
    }
    generateMap(longeurCircuit, largeurCircuit) {
        document.getElementById('container-circuit').innerHTML = ""; // réinitialise la carte
        var el = document.getElementById('container-circuit');
        for (var i = 0; i < longeurCircuit; i++) { // genere une carte de 10 sur 10
            var row = document.createElement('div');
            row.setAttribute("class", "row"); // attribution classe row
            el.appendChild(row);
            for (var j = 0; j < largeurCircuit; j++) {
                var col = document.createElement('div');
                col.setAttribute("class", "square"); // attribution classe row
                col.setAttribute("data-x", (j + 1).toString()); // attribution attribut data-x
                col.setAttribute("data-y", (i + 1).toString()); // attribution attribut data-y
                col.setAttribute("type", ""); // attribution attribut type (vide/blocked/weapon/player)
                row.appendChild(col);
            }
        }
    }
    generateRocks(nombreCailloux = 20) {
        for (var i = 0; i < nombreCailloux; i++) {
            var x = Math.ceil(Math.random() * 10); //genere un nombre entre 1 et 10
            var y = Math.ceil(Math.random() * 10);
            var rock = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case
            if (rock.getAttribute("type") === "") { // test si la case est vide
                rock.setAttribute("type", "rock"); // on defini le type a rock
                rock.classList.add("rock"); // on attribue la classe rock
            }
            else {
                i--; // si la case n'est pas vide on recommence l'iteration
            }
            ;
        }
    }
    generateFlies(nombreMouche) {
        for (var i = 0; i < nombreMouche; i++) {
            var x = Math.ceil(Math.random() * 10); //genere un nombre entre 1 et 10
            var y = Math.ceil(Math.random() * 10);
            var fly = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case
            if (fly.getAttribute("type") === "") { // test si la case est vide
                fly.setAttribute("type", "fly"); // on defini le type a fly
                fly.classList.add("fly"); // on attribue la classe fly
            }
            else {
                i--; // si la case n'est pas vide on recommence l'iteration
            }
            ;
        }
    }
    generateFrog() {
        var x = parseInt(Math.ceil(Math.random() * 10).toString()); // on genere un nombre entre 1 et 10
        var y = parseInt(Math.ceil(Math.random() * 10).toString());
        player.coordX = x; // On set les coordonnées
        player.coordY = y;
        var frog = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case
        if (frog.getAttribute("type") === "") { // test si la case est vide
            frog.setAttribute("type", "frog"); // on defini le type a frog
            frog.classList.add("frog"); // on attribue la classe frog
        }
        else {
            this.generateFrog();
        }
        ;
    }
    getPlayer() {
        return player;
    }
}
export { circuit };
