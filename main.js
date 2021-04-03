const sequecia = document.querySelector('.sequencias');
const b_add_win = document.querySelector('.botao_add_win');
const b_add_lose = document.querySelector('.botao_add_lose');
const b_add_sequencia = document.querySelector('.botao_add_sequencia');


function addBotaoWin() {
    const botao = document.createElement('button');
    botao.classList = "botao_add_win";
    botao.style.marginRight = "5px";
    botao.innerHTML = "WIN";
    sequecia.appendChild(botao)
}

function addBotaoLose() {
    const botao = document.createElement('button');
    botao.classList = "botao_add_lose";
    botao.style.marginRight = "5px";
    botao.innerHTML = "LOSE";
    sequecia.appendChild(botao)
}

function proximaSeq() {
    const br = document.createElement('br');
    sequecia.appendChild(br);
}

b_add_win.addEventListener('click', function (e) {
    addBotaoWin();
})

b_add_lose.addEventListener('click', function (e) {
    addBotaoLose();
})

b_add_sequencia.addEventListener('click', function (e) {
    proximaSeq();
})