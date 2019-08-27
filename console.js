window.onload = () => {
    const div = document.createElement('div');
    document.body.appendChild(div)
    div.innerText = "asdfasd"
    div.contentText = "asdfasd"
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "white"
    document.body.append(div);
    div.innerHTML = '<h1>TESTANDO O DOM</h1>'
    div.style.fontSize = '50px'
    div.addEventListener('mouseover', function() { this.style.color = 'blue' });
    div.onmouseleave = function() { this.style.color = 'black' }
    const botao = document.createElement('button');
    botao.innerHTML = 'Testando'
    document.body.appendChild(botao)
    botao.style = { fontSize: '32px', color: 'green' }
    botao.style.fontSize = '32px';
    botao.style.color = 'green';
    botao.onclick = () => { alert("Clicou no Botao!!!") }
    input1 = document.createElement('input');
    input1.setAttribute('type', 'number')
    input1.setAttribute('step', '0.01')
    document.body.appendChild(input1)
    input1.style.fontSize = '32px'
}