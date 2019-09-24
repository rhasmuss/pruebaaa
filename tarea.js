"use strict";
exports.__esModule = true;
// TAREA: HACER UNA CLASE QUE SE LLAME "Auto" el cual reciba como parametros
// (ruedas, color, puertas, marca, modelo)
var Auto = /** @class */ (function () {
    function Auto(_ruedas, _color, _pertas, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _pertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    return Auto;
}());
exports.Auto = Auto;
var aut = new Auto(4, "negro", 2, 'ferari', '2019');
console.log(aut);
