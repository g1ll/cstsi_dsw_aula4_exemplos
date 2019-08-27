/**
 * É possível iterar as propriedades de um Object
 * usando o método entrires() o qual retorna um par de
 * [chave, valor] para cada 'entrada' do Objeto dentro 
 * de um FOR com a sintaxe FOR(... OF ...) 
 */

const carro = { marca: 'VW', cor: 'Preto', modelo: 'GOl' }

for (let itens of Object.entries(carro)) {
    console.log(itens);
}

for (let [chave, valor] of Object.entries(carro)) {
    console.log(`atributo: ${chave} | valor: ${valor}`);
}