/**
 * EXEMPLO CRIAÇÃO DE OBJETOS LETERAIS EM JS
 * SINTAXE:
 * OBJ = {ATRIBUTO:VALOR,ATRIBUTO2:VALOR2,....}
 * 
 */
const pessoa = { altura: 1.7, peso: 80 }
console.log({ pessoa })
pessoa.idade = 31
console.table({ pessoa })

/** Melhor prática é criar o atributo na declaração
 * do objeto e depois alterar o valro
 *  */

const carro = { marca: 'VW', cor: 'Preto', modelo: '' }
console.table({ carro })
carro.modelo = 'Gol GVI'
console.table({ carro })