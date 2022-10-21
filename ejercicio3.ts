class Caballo {
    private color: string;
    protected velocidad: number;

    public constructor (color:string){
        this.color=color;
        this.velocidad=0;
    }
    public aumentarVelocidad ():void{
        this.velocidad += 10;
    }
}
class CaballoCarrera extends Caballo{
    public constructor (color:string){
        super(color);
    }
    public aumentarVelocidad(): void {
        this.velocidad += 15;
    }
}
class CaballoFuerza extends Caballo{
    public constructor (color:string){
        super(color);
    }
    public aumentarVelocidad(): void {
        this.velocidad += 5;
    }
}

let caballo1 : Caballo = new Caballo ("Negro");
let caballo2 : CaballoCarrera = new CaballoCarrera("Blanco");
let caballo3 : CaballoFuerza = new CaballoFuerza("Marron");

caballo1.aumentarVelocidad();
caballo2.aumentarVelocidad();
caballo3.aumentarVelocidad();
console.log(caballo1);
console.log(caballo2);
console.log(caballo3);