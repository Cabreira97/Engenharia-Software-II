const prompt = require('prompt-sync')()

function parOuImpar(numero) {
  const insereNumero = Number(prompt("Insira um número: "));

  numero = insereNumero % 2

  return numero == 0 ? console.log('Par') : console.log('Impar')

}

parOuImpar()