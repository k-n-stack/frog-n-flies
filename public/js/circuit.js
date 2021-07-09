import { grenouille } from "./grenouille.js";
import { mouche } from "./mouche.js";
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
        this.cookieValue = {
            Html: "",
            Frog: {},
            Flies: [],
        };
        this.longueurCircuit = longueurCircuit;
        this.largeurCircuit = largeurCircuit;
        this.score = score;
    }
    //Call les différentes fonctions, de facon à générer le layout du jeu.
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
                //Creation d'un object littéral d'une mouche
                let _fly = {
                    name: `mouche${i}`,
                    coordX: x,
                    coordY: y,
                };
                //On Ajoute cet objet littéral dans un tableau
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
    //Vérifie le placement de la grenouille au "START" du jeu. condition : Si la grenouille est entouré de "ROCK" le jeu restart.
    checkGenerate() {
        var squareLeft = document.querySelector(".square[data-x='" + (this.frog.coordX - 1) + "'][data-y='" + this.frog.coordY + "']");
        var squareRight = document.querySelector(".square[data-x='" + (this.frog.coordX + 1) + "'][data-y='" + this.frog.coordY + "']");
        var squareUp = document.querySelector(".square[data-x='" + this.frog.coordX + "'][data-y='" + (this.frog.coordY - 1) + "']");
        var squareDown = document.querySelector(".square[data-x='" + this.frog.coordX + "'][data-y='" + (this.frog.coordY + 1) + "']");
        if (((squareLeft ? (squareLeft.classList[1] == "rock") : true) || this.frog.coordX - 1 == 0) && ((squareRight ? (squareRight.classList[1] == "rock") : true) || this.frog.coordX + 1 == 11) && ((squareUp ? (squareUp.classList[1] == "rock") : true) || this.frog.coordY - 1 == 0) && ((squareDown ? (squareDown.classList[1] == "rock") : true) || this.frog.coordY + 1 == 11)) {
            alert("Bloqué");
            window.location.reload();
        }
    }
    //pass turn each time "frog" does an action:
    Turn(value, command) {
        var frog = new grenouille("NomIconFrog");
        frog.move(value, command);
        document.getElementById("score").innerHTML = "Score : " + this.score + "";
        var flie = new mouche("nomIconFlie");
        flie.moveAll(this.flies);
    }
    //effectue une comparaison entre la position des mouches et de la grenouille.
    //Si les positions récupéré correspondent, la mouche MEURT !
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
    //Set expiration Date Cookie.
    //Store Data Cookie.
    //JSON.stringify: method converts a JavaScript object or value to a JSON string.
    //toUTCString: method converts a date to a string, using the UTC time zone
    setCookie(value) {
        var exdays = 20;
        var d = new Date();
        // Configure the expiration date: current date + x days
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        console.log("Dans setCookie : " + expires);
        localStorage.setItem(circuit.cookieName, JSON.stringify(value));
    }
    // Get Data Cookie.
    // return "string" (JSON.parse) into an "bordel" object.
    // "bordel" = type (voir construct)
    getCookie() {
        let cookieValue = localStorage.getItem(circuit.cookieName);
        return JSON.parse(cookieValue);
    }
}
circuit.cookieName = "circuit";
export { circuit };
