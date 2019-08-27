let pi = 3.14
    //var pi = 3 //Descomente para ver o erro
    //let pi = 0.14 // Erro de redeclaração da variável pi
console.log(pi)

//escopo de bloco
if (true) {
    let pi = 3.1415
        //imprime o valor de pi do bloco
    console.log(pi)
}
//imprime o valor de pi do inicio do programa
console.log(pi)

//uso comum para let iteradores
for (let c of 'abcde') {
    console.log(c);
}
const n = 5;
for (let i = 1; i <= 10; i++) console.log(`${i}X${n}=${i*n}`)

//observe que i não é mais acessível fora do FOR
//console.log(i)//Descomente para ver o erro