class Case {
    private abscisse : number;
    private ordonnee : number;
    private isPassable : boolean;
    private imgName : string;

    constructor(abscisse : number, ordonnee : number, isPassable : boolean, imgName : string) {
        this.abscisse = abscisse;
        this.ordonnee = ordonnee;
        this.isPassable = isPassable;
        this.imgName = imgName;
    }

    public getAbscisse() : number {return this.abscisse}
    public getOrdonnee() : number {return this.ordonnee}
    public getIsPassable() : boolean {return this.isPassable}
    public getImgName() : string {return this.imgName}

    public setAbscisse(value : number) : void {this.abscisse = value}
    public setOrdonnee(value : number) : void {this.ordonnee = value}
    public setIsPassable(value : boolean) : void {this.isPassable = value}
    public setImgName(value : string) : void {this.imgName = value}
}


export {Case};

