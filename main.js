"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ap) {
        this.nombre = nom;
        this.apellido = ap;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    return Trago;
}());
exports.Trago = Trago;
/******************************************************************* */
var bar1 = new Bar('nueva era ', 50);
var bar2 = new Bar('el patio', 200);
var barman1 = new BarMan('el topo', 'caca');
var trago1 = new Trago('gaipirina', 'morado', 3);
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
