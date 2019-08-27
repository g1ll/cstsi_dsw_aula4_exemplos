const pi = 3.14
    //pi = 3.14//Não é possível atribuir novos valores

//Mas é possível alterar conteúdo de um Array
const frutas = ['maça', 'limão', 'uva'];

frutas.push('laranja') //não gera erro

console.table(frutas)

//Também é possível alterar atributos de um Objeto
const carro = { marca: 'VW', cor: 'Preto', modelo: 'Gol GVII' }
carro.modelo = "Polo"
console.table({ carro })