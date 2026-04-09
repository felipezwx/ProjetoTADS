const NomeJogo = "Crystal Galaxy";
const AnoDeLancamento = 2026;
const Genero = "Plataforma";
const Empresa = "Mystic Forge Studios";
const Classificacao = 16;

window.onload = function () {

    alert("Bem-vindo ao " + NomeJogo + "!");

    let anoAtual = new Date().getFullYear();

    if (anoAtual === AnoDeLancamento) {
        alert("🎉 Grande lançamento do jogo este ano!");
    }

    let nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + "! Bem-vindo ao " + NomeJogo);

    let idade = Number(prompt("Digite sua idade:"));

    if (idade >= Classificacao) {
        alert("Acesso liberado ✅");
        liberarConteudo();
    } else {
        alert("Acesso Negado! Conteúdo Bloqueado 🚫");
    }
}

function liberarConteudo() {
    let conteudo = document.getElementById("conteudoSensivel");
    if (conteudo) {
        conteudo.style.filter = "blur(0px)";
    }
}

let temaClaro = false;

function alternarTema() {
    temaClaro = !temaClaro;

    document.body.classList.toggle("light");

    let botao = document.getElementById("btnTema");

    if (temaClaro) {
        botao.innerText = "🌙";
    } else {
        botao.innerText = "☀️";
    }
}