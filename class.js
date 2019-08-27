//Declaração da Classe Pessoa
class Pessoa {
    constructor(nome, alt, peso) {
        this.altura = alt
        this.peso = peso
        this.nome = nome
    }

    imc() {
        return this.peso / this.altura ** 2
    }
}

//Criação de dois objetos da Classe Pessoa
const fulano = new Pessoa('Fulano', 1.7, 80)
const beltrano = new Pessoa('Beltrano', 1.8, 90)

console.table([fulano, beltrano])

console.log(`O IMC do ${fulano.nome} é ${fulano.imc().toFixed(2)}`)
console.log(`O Peso do ${beltrano.nome} é ${beltrano.peso} Kg`)