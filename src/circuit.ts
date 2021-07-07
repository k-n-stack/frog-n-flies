class Circuit {

    private longueurCircuit : number;
    private largeurCircuit : number;
    private score : number;

    constructor(longueurCircuit : number, largeurCircuit : number, score : number) {
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
            } else {
              i--; // si la case n'est pas vide on recommence l'iteration
            };
        }
    }

    public generateFrog() : void {

        var frog : Element | null;

        do {
            var x : number = Math.ceil(Math.random() * 10); //genere un nombre entre 1 et 10
            var y : number = Math.ceil(Math.random() * 10);
            var frog = document.querySelector(".square[data-x='" + x + "'][data-y='" + y + "']"); // on recupere la case
        } while (frog!.getAttribute("type") !== "");

            frog!.setAttribute("type", "frog");
            frog!.classList.add("frog"); // on attribue la classe frog
    }


}
export {Circuit}

