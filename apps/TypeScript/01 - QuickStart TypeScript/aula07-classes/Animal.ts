export class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public move(distanciaMetros: number): void {
        console.log(`${this.nome} andou ${distanciaMetros} em Metros`);
    }
}

