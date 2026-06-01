class Produto {
    constructor() {
        this.nomeInput = document.getElementById("in-nome");
        this.nomeCard = document.getElementById("card-nome");
        this.preview = document.getElementById("card-preview");

        this.estaAtivo = false;

        this.atualizarStatus();
    }

    atualizarNome(novoNome) {
        this.nomeCard.innerText = novoNome;
    }

    mudarCor(novaCor) {
        this.preview.style.backgroundColor = novaCor;
    }

    alternarStatus() {
        this.estaAtivo = !this.estaAtivo;
        this.atualizarStatus();
    }

    atualizarStatus() {
        if (this.estaAtivo) {
            this.preview.style.border = "6px solid green";
        } else {
            this.preview.style.border = "6px dashed red";
        }
    }
}

const produto = new Produto();

// Atualiza o nome
document.getElementById("in-nome").addEventListener("input", (event) => {
    produto.atualizarNome(event.target.value);
});

// Atualiza a cor
document.getElementById("in-cor").addEventListener("input", (event) => {
    produto.mudarCor(event.target.value);
});

document.getElementById("card-preview").addEventListener("contextmenu", (event) => {
    event.preventDefault(); 
    produto.alternarStatus();
});