"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./../aula07-classes/Animal");
var AnimalDao = (function () {
    function AnimalDao() {
        this.tableName = 'cavalo';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log("inserting..." + object.move(10));
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new Animal_1.Animal('Rex')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map