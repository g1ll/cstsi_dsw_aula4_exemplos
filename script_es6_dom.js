 window.onload = function(){
      document.cadastro.addEventListener('submit', processaCadastro);
 }

 const listProds = []
 let prodId = 0
 let prodIdedit = 0

 function processaCadastro(e) {
     e.preventDefault();
     const submit = document.querySelector('input[type="submit"]')
     const titulo = document.querySelectorAll('h3')[0]

     const selectdesco = this.desco.selectedOptions;

     const listItens = []
     Array.from(this.itens).forEach((item) => {
         if (item.checked) listItens.push(item)
     });


     const produto = {
         id: (!prodIdedit) ? ++prodId : prodIdedit,
         nome: this.nome.value,
         desc: this.desc.value,
         qtd: this.qtd.value,
         preco: this.preco.value,
         origem: this.ori.value,
         itens: (listItens.length) ? listItens : [{ value: 'Sem Itens' }],
         desco: (selectdesco.length) ? selectdesco : [{ value: 'Sem Descontos' }]
     }

     if (!prodIdedit) { //Cadastrar
         listProds.push(produto)
         addTable(produto)
     } else { //Salvar
         listProds.find((prod, i) => {
             if (prod.id === prodIdedit) {
                 listProds[i] = produto;
                 prodIdedit = 0;
                 return true
             };
         });
         editTable(produto)
         this.setAttribute('style', '')
         titulo.setAttribute('style', '')
     }
     let novoTexto = document.createTextNode('Cadastrar Produto');
     titulo.replaceChild(novoTexto, titulo.lastChild)
     submit.setAttribute('value', 'Cadastrar');
     this.reset()
 }

 function removeProd() {
     if (confirm('Você excluirá este item definitivamente!')) {
         let idpro = parseInt(this.getAttribute('idpro'));
         listProds.splice(listProds.findIndex(prod =>prod.id === idpro), 1);
         removeTable(idpro);
     }
 }

 function editProd() {
     console.log(this.lastChild);
     const idpro = Number(this.getAttribute('idpro'));
     const prod = listProds.find((prod, index) => {
         if (prod.id === idpro) {
             return true;
         }
     });
     if (prod) {
         const cadastro = document.cadastro
         cadastro.nome.value = prod.nome
         cadastro.desc.value = prod.desc
         cadastro.qtd.value = prod.qtd
         cadastro.preco.value = prod.preco
         if (prod.origem)
             cadastro.ori[(prod.origem === 'Nacional') ? 0 : 1].checked = true
         const titulo = document.querySelectorAll('h3')[0]
         let novoTexto = document.createTextNode('Editar Produto')
         titulo.replaceChild(novoTexto, titulo.lastChild)
         titulo.setAttribute('style', 'color:red')
         cadastro.submit.value = 'Salvar'
         prodIdedit = prod.id
         cadastro.nome.focus()
         cadastro.setAttribute('style', 'border:solid 2px red;border-radius:10px')
     }
 }

 function addToTable(produto) {
     if (produto) {
         const table = document.querySelector('tbody')
         const tr = document.createElement('tr')
         const listTds = new Array()

         let td, ul, li

         tr.setAttribute('id', produto.id)

         for (let [key, prod] of Object.entries(produto)) {
             td = document.createElement('td')
             if (key === 'desco' || key === 'itens') {
                 ul = document.createElement('ul')
                 Array.from(prod).forEach(item => {
                     li = document.createElement('li')
                     li.appendChild(document.createTextNode(item.value))
                     ul.appendChild(li)
                 })
                 td.appendChild(ul)
             } else {
                 td.appendChild(document.createTextNode(prod))
             }
             listTds.push(td)
         }

         const remove = document.createElement('button')
         remove.appendChild(document.createTextNode('\uD83D\uDDD1')) //&#10000
         remove.setAttribute('idpro', '' + produto.id)
         remove.setAttribute('title', 'Remover este item.')
         remove.addEventListener('click', removeProd)

         const edit = document.createElement('button')
         edit.appendChild(document.createTextNode('\u270E'))
         edit.setAttribute('idpro', '' + produto.id)
         edit.setAttribute('title', 'Editar este item.')
         edit.addEventListener('click', editProd)

         td = document.createElement('td')
         td.appendChild(remove)
         td.appendChild(edit)

         listTds.push(td)

         listTds.forEach(td => tr.appendChild(td))

         table.appendChild(tr)
     }
 }

 function removeFromTable(id) {
     var table = document.querySelector('tbody')
     table.removeChild(document.getElementById(id))
 }

 function editFromTable(produto) {
     if (produto) {
         const tr = document.getElementById(produto.id)
         const tdAcoes = tr.childNodes[tr.childElementCount - 1]
         while (tr.lastChild) tr.removeChild(tr.lastChild);
         let td, ul, li;
         for ([key, prod] of Object.entries(produto)) {
             td = document.createElement('td');
             if (key === 'desco' || key === 'itens') {
                 ul = document.createElement('ul')
                 Array.from(prod).forEach(item => {
                     li = document.createElement('li')
                     li.appendChild(document.createTextNode(item.value))
                     ul.appendChild(li)
                 });
                 td.appendChild(ul)
             } else {
                 td.appendChild(document.createTextNode(prod))
             }
             tr.appendChild(td)
         }
         tr.appendChild(tdAcoes)
     }
 }