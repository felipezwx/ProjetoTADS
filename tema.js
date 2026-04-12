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

const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Sua mensagem foi enviada!");

    form.reset();
});