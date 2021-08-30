var anoAtual = 2021
var anoNasc = parseInt(prompt('Informe o ano de nascimento:'))

var idade = anoAtual - anoNasc
 alert('Sua idade é:' + idade)

if(idade >= 60){
 alert('Você é idos@')
}

if(idade <= 60 && idade >= 18){
  alert('Você é adult@')
}

if(idade <= 18 && idade >= 12){
  alert('Você é adolescente.')
}

if(idade <= 12){
  alert('Você é uma criança.')
}
