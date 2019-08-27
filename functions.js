const pessoa = { alt: 1.7, peso: 80 }

pessoa.imc = function() { return this.peso / this.alt ** 2 }
    //pessoa.imc = () => { return this.peso / this.alt ** 2 }

console.log(pessoa.imc().toFixed(2))