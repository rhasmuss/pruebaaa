// TAREA: HACER UNA CLASE QUE SE LLAME "Auto" el cual reciba como parametros
// (ruedas, color, puertas, marca, modelo)
export class Auto {
    ruedas: number;
    color: string;
    puertas: number;
    marca: string;
    modelo: string;
    constructor(_ruedas, _color, _pertas, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _pertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
}
let aut: Auto = new Auto(4, "negro", 2, 'ferari', '2019');
console.log(aut);