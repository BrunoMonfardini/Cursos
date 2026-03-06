let carrinho = [];

function comprar(){
  alert("Redirecionando para compra...");
}

function addCarrinho(produto){

  carrinho.push(produto);

  alert(produto + " foi adicionado ao carrinho!");

  console.log("Carrinho:", carrinho);

}