let carrinho = []
let produtoAtual = ""

function abrirProduto(nome, preco){

produtoAtual = nome

document.getElementById("modal-title").innerText = nome
document.getElementById("modal-price").innerText = preco

document.getElementById("modal").style.display = "flex"

}

function fecharModal(){
document.getElementById("modal").style.display = "none"
}

function addCarrinho(){

carrinho.push(produtoAtual)

document.getElementById("cart-count").innerText = carrinho.length

alert(produtoAtual + " adicionado ao carrinho!")

fecharModal()

}

function toggleDarkMode(){

document.body.classList.toggle("dark")

}