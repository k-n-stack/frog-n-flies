class Case {
    constructor(abscisse, ordonnee, isPassable, imgName) {
        this.abscisse = abscisse;
        this.ordonnee = ordonnee;
        this.isPassable = isPassable;
        this.imgName = imgName;
    }
    getAbscisse() { return this.abscisse; }
    getOrdonnee() { return this.ordonnee; }
    getIsPassable() { return this.isPassable; }
    getImgName() { return this.imgName; }
    setAbscisse(value) { this.abscisse = value; }
    setOrdonnee(value) { this.ordonnee = value; }
    setIsPassable(value) { this.isPassable = value; }
    setImgName(value) { this.imgName = value; }
}
export { Case };
