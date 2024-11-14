let respostaEstaVisivel = false;

const appElement = document.getElementById("app");

const cartaoDados = [
    { 
        titulo: "Cartão 1", 
        imagemUrl: "https://via.placeholder.com/150", 
        conteudo: "Este é o conteúdo do Cartão 1."
    },
    { 
        titulo: "Cartão 2", 
        imagemUrl: "https://via.placeholder.com/150", 
        conteudo: "Este é o conteúdo do Cartão 2."
    },
    { 
        titulo: "Cartão 3", 
        imagemUrl: "https://via.placeholder.com/150", 
        conteudo: "Este é o conteúdo do Cartão 3."
    },
    { 
        titulo: "Cartão 4", 
        imagemUrl: "https://via.placeholder.com/150", 
        conteudo: "Este é o conteúdo do Cartão 4."
    }
];

function criarCartao(dados) {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao");

    const titulo = document.createElement("h3");
    titulo.textContent = dados.titulo;
    cartao.appendChild(titulo);

    const imagem = document.createElement("img");
    imagem.src = dados.imagemUrl;
    imagem.alt = dados.titulo;
    cartao.appendChild(imagem);

    const conteudo = document.createElement("p");
    conteudo.textContent = dados.conteudo;
    conteudo.classList.add("conteudo");
    conteudo.style.display = "none";
    cartao.appendChild(conteudo);

    cartao.addEventListener("click", () => {
        exibirConteudo(cartao, titulo, imagem, conteudo);
    });

    return cartao;
}

function exibirConteudo(cartao, titulo, imagem, conteudo) {
    respostaEstaVisivel = !respostaEstaVisivel;

    if (respostaEstaVisivel) {
        conteudo.style.display = "block";
        titulo.style.display = "none";
        imagem.style.display = "none";
        cartao.classList.add("virado");
    } else {
        conteudo.style.display = "none";
        titulo.style.display = "block";
        imagem.style.display = "block";
        cartao.classList.remove("virado");
    }
}

cartaoDados.forEach(dados => {
    const cartao = criarCartao(dados);
    appElement.appendChild(cartao);
});
