const listProds = [];
//const form = document.getElementById('form');
//const form = document.formulario;
const form = document.querySelector('form');
form.onsubmit = function(e) {
    e.preventDefault();
    console.clear();

    const seletor = this.prod; //this é o form
    console.log('%c Seletor', 'color:green;font-weight:bold');
    console.log({
        seletor
    });
    //Elementos selecionados
    const produtos = Array.from(seletor.selectedOptions);
    console.log(produtos);

    const objProd = {
        listaOpcoes: [],
        pagar: this.pag.value,
        ext: [],
        endereco: this.end.value
    };

    produtos.forEach(item => {
        objProd.listaOpcoes.push(item.value)
    });

    Array.from(this.chkitem).forEach(item => {
        if (item.checked)
            objProd.ext.push(item.value)
    });

    console.log(objProd)

    listProds.push(objProd)
        //console.table(listProds)

    mostraListaPorObjeto(listProds);
    this.reset();
}

function mostraLista(list) {
    let div = document.querySelector('#resultado');
    let lista = `<ul>`;
    list.forEach(obj => {
        lista += `<li>
                    <hr> | Produtos: ${obj.listaOpcoes.join(' ')} 
                    | Pagamento: ${obj.pagar}
                    | Extras: ${obj.ext.join(' ')}<hr></li>`;
    });
    lista += '</ul>';
    div.innerHTML = lista;
}

function mostraListaPorObjeto(list) {
    let div = document.querySelector('#resultado');
    let lista = "<h3>Produtos</h3>";
    list.forEach(obj => {
        lista += `<ul><li>Produtos: <ul><li>${obj.listaOpcoes.join('</li><li>')}</li></ul></li> 
                    <li>Pagamento: ${obj.pagar}</li>
                    <li>Extras: <ul><li>${obj.ext.join('</li><li>')}</li></ul></li></ul><hr>`;
    });
    div.innerHTML = lista;
}