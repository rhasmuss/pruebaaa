export class Bar {
    private _nombre: string;     //atributo
    private _capacidad: number;
    constructor(nom: string, cap: number) {

        this._nombre = nom;
        this._capacidad = cap;
    }
    public setNombre(nom: string):void{
        this._nombre=nom;
        
    }
   public getNombre(): string{
        return this._nombre;
   }
   public setCapacidad(cap:number):void{

    this._capacidad=cap;

   }
   public getcapaciad(): number{
       return this._capacidad;
   }
}
export class BarMan {

    private nombre: string;
    private apellido: string;
    constructor(nom: string, ap: string) {
        this.nombre = nom;
        this.apellido = ap;
    }
    public getNombre(): string {
        return this.nombre;
    }
  public setNombre(nom: string):void{

    this.nombre=nom;
  }
  public  getApellido(): string{
      return this.apellido;
  }
  public setApellido(ap:string ){
      this.apellido=ap;
  }
}

export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor(nom: string, col: string, cant: number) {

        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    public setNombre(nom:string){
        this.nombre=nom;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setColor(col:string){
        this.color=col;
    }
    public getColor():string{
        return this.color;
    }
    public setCantidad(cant:number){
        this.cantidad=cant;
    }
    public getCcantidad():number{
    return this.cantidad;
    }
}

/******************************************************************* */



let bar1: Bar = new Bar('nueva era ', 50);
let bar2: Bar = new Bar('el patio', 200);
let barman1: BarMan = new BarMan('bryan', 'poca');
let trago1: Trago = new Trago('gaipirina', 'morado', 3);
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
console.log(bar1.getNombre());
console.log(bar1.setCapacidad(60));