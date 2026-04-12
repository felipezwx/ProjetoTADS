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