import { grenouille } from "./grenouille.js";
class circuit {
    constructor(longueurCircuit, largeurCircuit, score) {
        this.score = 0;
        this.frog = {
            name: "Grenouille",
            coordX: 0,
            coordY: 0,
            css_class: "frog", // classe
        };
        this.flies = [];
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
                let _fly = {
                    name: `mouche${i}`,
                    coordX: x,
                    coordY: y,
                };
                this.flies.push(_fly);
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
        this.frog.coordX = x; // On set les coordonnées
        this.frog.coordY = y;
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
    checkGenerate() {
        var squareLeft = document.querySelector(".square[data-x='" + (this.frog.coordX - 1) + "'][data-y='" + this.frog.coordY + "']");
        var squareRight = document.querySelector(".square[data-x='" + (this.frog.coordX + 1) + "'][data-y='" + this.frog.coordY + "']");
        var squareUp = document.querySelector(".square[data-x='" + this.frog.coordX + "'][data-y='" + (this.frog.coordY - 1) + "']");
        var squareDown = document.querySelector(".square[data-x='" + this.frog.coordX + "'][data-y='" + (this.frog.coordY + 1) + "']");
        if (squareLeft == null) {
            squareLeft = document.getElementById("score");
        }
        else if (squareRight == null) {
            squareRight = document.getElementById("score");
        }
        else if (squareUp == null) {
            squareUp = document.getElementById("score");
        }
        else if (squareDown == null) {
            squareDown = document.getElementById("score");
        }
        if ((squareLeft.classList[1] == "rock" || this.frog.coordX - 1 == 0) && (squareRight.classList[1] == "rock" || this.frog.coordX + 1 == 11) && (squareUp.classList[1] == "rock" || this.frog.coordY - 1 == 0) && (squareDown.classList[1] == "rock" || this.frog.coordY + 1 == 11)) {
            window.location.reload();
        }
    }
    Turn(value, command) {
        var frog = new grenouille("NomIconFrog");
        frog.move(value, command);
        document.getElementById("score").innerHTML = "Score : " + this.score + "";
    }
    popFly(coordX, coordY) {
        console.log("Wow tu es rentré dans popFly !");
        let _index = -1;
        this.flies.forEach(function (element, index) {
            console.log('here');
            if (element.coordX === coordX && element.coordY === coordY) {
                console.log('attraper');
                _index = index;
            }
        });
        if (_index != -1) {
            console.log('in popFly functionality');
            this.flies.splice(_index, 1);
        }
    }
}
export { circuit };
