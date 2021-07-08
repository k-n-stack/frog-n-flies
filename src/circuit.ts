import {grenouille} from "./grenouille.js";
import {mouche} from "./mouche.js";

class circuit {

    private longueurCircuit : number;
    private largeurCircuit : number;
    public score : number = 0;
    public frog = { // Grenouille
      name: "Grenouille",
      coordX: 0,
      coordY: 0,
      css_class: "frog", // classe
    };
    public flies : {name:string, coordX:number, coordY:number}[] = [];
    public cookieValue : {Html:string, Frog:Object, Flies: any[]} = {
      Html: "",
      Frog: {},
      Flies: [],
    };
    public static cookieName : string = "circuit";

    constructor(longueurCircuit : number, largeurCircuit : number, score : number,) {
        this.longueurCircuit = longueurCircuit;
        this.largeurCircuit = largeurCircuit;
        this.score = score;
    }

    public generate(nombreMouche : number) : void {
        this.generateMap(this.longueurCircuit, this.largeurCircuit);
        this.generateRocks();
        this.generateFlies(nombreMouche);
        this.generateFrog();
    }

    public generateMap(longeurCircuit : number, largeurCircuit : number) : void {
        document.getElementById('container-circuit')!.innerHTML = ""; // réinitialise la carte

        var el = document.getElementById('container-circuit')!;

        for (var i : number = 0; i < longeurCircuit; i++) { // genere une carte de 10 sur 10
            var row = document.createElement('div');
            row.setAttribute("class", "row"); // attribution classe row
            el.appendChild(row);

            for (var j : number = 0; j < largeurCircuit; j++) {
                var col = document.createElement('div');
                col.setAttribute("class", "square"); // attribution classe row
                col.setAttribute("data-x", (j + 1).toString()); // attribution attribut data-x
                col.setAttribute("data-y", (i + 1).toString()); // attribution attribut data-y
                col.setAttribute("type", ""); // attribution attribut type (vide/blocked/weapon/player)
                row.appendChild(col);
            }
        }
    }

    public generateRocks(nombreCailloux : number = 20) : void {
        for (var i : number = 0; i < nombreCailloux; i++) {
            var x : number = Math.ceil(Math.random() * 10); //genere un nombre entre 1 et 10
            var y : number = Math.ceil(Math.random() * 10);

            var rock = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case

            if (rock!.getAttribute("type") === "") { // test si la case est vide
              rock!.setAttribute("type", "rock"); // on defini le type a rock
              rock!.classList.add("rock"); // on attribue la classe rock
            } else {
              i--; // si la case n'est pas vide on recommence l'iteration
            };
        }
    }

    public generateFlies(nombreMouche : number) : void {
        for (var i : number = 0; i < nombreMouche; i++) {
            var x : number = Math.ceil(Math.random() * 10); //genere un nombre entre 1 et 10
            var y : number = Math.ceil(Math.random() * 10);

            var fly = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case

            if (fly!.getAttribute("type") === "") { // test si la case est vide
              fly!.setAttribute("type", "fly"); // on defini le type a fly
              fly!.classList.add("fly"); // on attribue la classe fly
              let _fly = {
                name : `mouche${i}`,
                coordX : x,
                coordY : y,
              };
              this.flies.push(_fly);
            } else {
              i--; // si la case n'est pas vide on recommence l'iteration
            };
        }
    }

    public generateFrog() : void {
      var x = parseInt(Math.ceil(Math.random() * 10).toString()); // on genere un nombre entre 1 et 10
      var y = parseInt(Math.ceil(Math.random() * 10).toString());
      this.frog.coordX = x; // On set les coordonnées
      this.frog.coordY = y;

      var frog = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case
      if (frog!.getAttribute("type") === "") { // test si la case est vide
        frog!.setAttribute("type", "frog"); // on defini le type a frog
        frog!.classList.add("frog"); // on attribue la classe frog
      } else {
        this.generateFrog();
      };
    }

    public checkGenerate() : void {
      var squareLeft = document.querySelector(".square[data-x='" + (this.frog.coordX - 1) + "'][data-y='" + this.frog.coordY + "']");
      var squareRight = document.querySelector(".square[data-x='" + (this.frog.coordX + 1) + "'][data-y='" + this.frog.coordY + "']");
      var squareUp = document.querySelector(".square[data-x='" + this.frog.coordX + "'][data-y='" + (this.frog.coordY - 1) + "']");
      var squareDown = document.querySelector(".square[data-x='" + this.frog.coordX + "'][data-y='" + (this.frog.coordY + 1) + "']");
      if (squareLeft == null) {
        squareLeft = document.getElementById("score");
      } else if (squareRight == null) {
        squareRight = document.getElementById("score");
      } else if (squareUp == null) {
        squareUp = document.getElementById("score");
      } else if (squareDown == null) {
        squareDown = document.getElementById("score");
      }
      if ( (squareLeft!.classList[1] == "rock" || this.frog.coordX - 1 == 0) && (squareRight!.classList[1] == "rock" || this.frog.coordX + 1 == 11) && (squareUp!.classList[1] == "rock" || this.frog.coordY - 1 == 0) && (squareDown!.classList[1] == "rock" || this.frog.coordY + 1 == 11)) {
        window.location.reload();
      }
    }

    public Turn(value : circuit, command : String) : void {
      var frog : grenouille = new grenouille("NomIconFrog");
      frog.move(value, command);
      document.getElementById("score")!.innerHTML = "Score : " + this.score + "";
      var flie : mouche = new mouche("nomIconFlie");
      flie.moveAll(this.flies);
    }

    public popFly(coordX : number, coordY : number) : void {
      console.log("Wow tu es rentré dans popFly !");
      let _index : number = -1;
      this.flies.forEach(function(element, index) {
        console.log('here');
        if(element.coordX === coordX && element.coordY === coordY) {
          console.log('attraper');
          _index = index;
        }
      });
      if(_index != -1) {
        console.log('in popFly functionality');
        this.flies.splice(_index, 1);
      }
    }

    public setCookie() : void {
      this.cookieValue = {
        Html: document.body.innerHTML,
        Frog: this.frog,
        Flies: this.flies,
      }
      var exdays : number = 20;
      var d = new Date();
      // Configure the expiration date: current date + x days
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      console.log("Dans setCookie : " + expires);

      /*localStorage.setItem(circuit.cookieName, JSON.stringify(this.cookieValue));
      console.log(localStorage.getItem(circuit.cookieName));*/

      let container : Element | null = document.getElementById('container-circuit');
      let allchild : any = container!.getElementsByTagName("*");
      let matrice : {x:number, y:number, type:string}[] = [];

      for(let element of allchild) {
        matrice.push({
          x: element.getAttribute('data-x'),
          y: element.getAttribute('data-y'),
          type: element.className
        });
      }

      localStorage.setItem(circuit.cookieName, JSON.stringify(matrice));

      //console.log(localStorage.getItem(circuit.cookieName));
      //document.cookie = (circuit.cookieName + "='test'");
      //document.cookie = circuit.cookieName + "='" + JSON.stringify(this.cookieValue) + "'; " + expires + "; path=/";
    }

    public static getCookie() : circuit {

      if(localStorage.length>0){
        //Si les cookies sont pleins: (.length>0)
        let cookie  : string = localStorage.getItem(circuit.cookieName) as string;
        if(cookie.length > 2){
          cookie = cookie.split("; ").filter(function(item){
            return item.startsWith(circuit.cookieName+"=");
            //.filter => variante de .find (find fonctionne seulement sur firefox)
          })[0].substring(circuit.cookieName.length+1);
          //[?]substring => affiche le contenu après une "string=";
          return JSON.parse(cookie) as circuit;
        }
      }

      /*if(document.cookie.length>0){
        //Si les cookies sont pleins: (.length>0)
        let cookie  : string = document.cookie;
        if(cookie.length > 2){
          cookie = cookie.split("; ").filter(function(item){
            return item.startsWith(circuit.cookieName+"=");
            //.filter => variante de .find (find fonctionne seulement sur firefox)
          })[0].substring(circuit.cookieName.length+1);
          //[?]substring => affiche le contenu après une "string=";
          return JSON.parse(cookie) as circuit;
        }
      }*/

       return new circuit(20, 20, 0);
    }


}

export {circuit};
