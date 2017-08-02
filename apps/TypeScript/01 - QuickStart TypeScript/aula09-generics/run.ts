import { Dao } from './dao';
import { Animal } from './../aula07-classes/Animal'

let dao: Dao<Animal> = new Dao<Animal>();

let Cavalo = new Animal('Pocoto');

dao.insert(Cavalo);
