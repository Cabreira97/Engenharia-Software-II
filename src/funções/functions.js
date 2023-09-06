const prompt = require('prompt-sync')()

function parOuImpar(numero) {
  const insereNumero = Number(prompt("Insira um número: "));

  numero = insereNumero % 2

  return numero == 0 ? console.log('Par') : console.log('Impar')

}

parOuImpar()

function porcentagem() {

  const num = Number(prompt("Valor: "))
  const porc = Number(prompt("Valor de desconto em %: "))

  calculo = num * (porc / 100)

  return console.log(`Valor Inicial do Produto: ${num} \nValor Final com Desconto: ${num - calculo}`)

}

porcentagem()