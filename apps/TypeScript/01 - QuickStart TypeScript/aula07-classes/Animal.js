"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.move = function (distanciaMetros) {
        console.log(this.nome + " andou " + distanciaMetros + " em Metros");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map