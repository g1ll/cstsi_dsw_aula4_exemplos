 const listProds = []
 let prodId = 0
 let prodIdedit = 0

 document.cadastro.onsubmit = function(e) {
     e.preventDefault();
     const submit = document.querySelector('input[type="submit"]')
     const titulo = document.querySelectorAll('h3')[0]

     const selectdesco = Array.from(
         this.desco.selectedOptions
     ).map(option => option.value);

     const listItens = []
     Array.from(this.itens).forEach(item => {
         if (item.checked) listItens.push(item.value)
     });

     const produto = {
         id: (!prodIdedit) ? ++prodId : prodIdedit,
         nome: this.nome.value,
         desc: this.desc.value,
         qtd: this.qtd.value,
         preco: this.preco.value,
         origem: this.ori.value,
         desco: (selectdesco.length) ? selectdesco : 'Sem Descontos',
         itens: (listItens.length) ? listItens : 'Sem Itens'
     }

     if (!prodIdedit) { //Cadastrar
         listProds.push(produto)
     } else { //Salvar
         listProds.find((prod, i) => {
             if (prod.id === prodIdedit) {
                 listProds[i] = produto;
                 return true
             };
         });
         prodIdedit = 0;
         this.setAttribute('style', '')
         titulo.setAttribute('style', '')
     }
     atualizaTabela(listProds);
     titulo.innerHTML = 'Cadastrar Produto'
     submit.value = 'Cadastrar'
     this.reset()
 }

 function removeProd(idpro) {
     if (confirm('Você excluirá este item definitivamente!')) {
         listProds.splice(listProds.findIndex(prod => prod.id === idpro), 1);
         atualizaTabela(listProds);
     }
 }

 function editProd(idpro) {
     const prod = listProds.find((prod) => prod.id === idpro);
     if (prod) {
         const cadastro = document.cadastro
         cadastro.nome.value = prod.nome
         cadastro.desc.value = prod.desc
         cadastro.qtd.value = prod.qtd
         cadastro.preco.value = prod.preco
         if (prod.origem)
             cadastro.ori[(prod.origem === 'Nacional') ? 0 : 1].checked = true
         const titulo = document.querySelectorAll('h3')[0]
         titulo.innerHTML = 'Editar Produto'
         titulo.setAttribute('style', 'color:red')
         cadastro.submit.value = 'Salvar'
         prodIdedit = prod.id
         cadastro.nome.focus()
         cadastro.setAttribute('style', 'border:solid 2px red;border-radius:10px')
     }
 }

 function atualizaTabela(list) {
     const tbody = document.querySelector('tbody');
     let linhas = '';
     list.forEach(produto => {
        linhas += '<tr>';
        for ([key, prod] of Object.entries(produto))
            linhas += `<td>${(Array.isArray(prod))?
                            `<ul><li>${prod.join('</li><li>')}</li><ul>` 
                            :prod}</td>`;
        linhas += `<td><button title='Remover este item.' 
                            onclick='removeProd(${produto.id})'>
                        &#128465</button>
                        <button title='Editar este item.' 
                            onclick='editProd(${produto.id})'>
                        &#10000;</button>
                    </td>`
     });
     tbody.innerHTML = linhas;
 }