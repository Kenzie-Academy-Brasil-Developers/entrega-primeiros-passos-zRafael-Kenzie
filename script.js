let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
let precoRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))
let precoFeijao = parseFloat(prompt("Digite o valor do Feijao"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))
let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))
let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))
let precoErvilha = parseFloat(prompt("Digite o valor do Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))
let totalVinho = precoVinho * quantidadeVinho
let total = precoMacarrao * quantidadeMacarrao + precoArroz * quantidadeArroz + precoErvilha * quantidadeErvilha + precoFeijao * quantidadeFeijao + precoVinho * quantidadeVinho + precoRefrigerante * quantidadeRefrigerante
let metade = total /2
let eu = 0
let amigo = 0



if (total % 2 == 0){
    eu = metade - totalVinho;
    amigo = metade + totalvinho;
  }else{
    eu = metade;
    amigo = metade;
  }
  

console.log (total)
console.log (eu)
console.log (amigo)

alert(`Valor total a ser pago por mim: ${eu}`)
alert(`Valor total a ser pago pelo meu amigo : ${amigo}`)
alert(`Valor total da compra : ${total}`)
