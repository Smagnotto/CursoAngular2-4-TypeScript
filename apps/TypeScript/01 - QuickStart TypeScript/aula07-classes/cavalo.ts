import { Animal } from './Animal'

export class Cavalo extends Animal {
    constructor (nome: string) {
        super(nome);
    }

    public move(distanciaMetros: number): void {
        console.log("Galopando...");
        super.move(distanciaMetros);
    }
}