let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById('resultado').textContent = `Nome sorteado: ${sorteado}`;
    
    listaAmigos = [];
    atualizarLista();
}
