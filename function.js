let numberOne = Number(prompt('Digite o primeiro número'))
let numberTwo = Number(prompt('Digite o segundo número'))

alert(`A soma dos dois números é ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é ${numberOne % numberTwo}`)

let result = numberOne + numberTwo

if(result % 2 == 0) {
  alert('A soma dos dois números é par: ' + result)
} else {
  alert('A soma dos dois números é ímpar: ' + result)
}

if(numberOne == numberTwo) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferentes')
}