/*
Var
// Seção de Declarações das variáveis 
    sairLoop: caractere
    valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
         escreva("Qual é o primeiro valor? ")
         leia(valor01)
         escreva(" Qual é o segundo valor? ")
         leia(valor02)
         escreval("Resultado: " , valor01 + valor02)
         escreval("Deseja sair S/N")
         leia(sairLoop)
   ate sairLoop <> "N"

*/
function acaoBotao(){
var sairLoop, valor01, valor02
do{
    valor01 = prompt("Qual é o primeiro valor? ")
    valor02 = prompt("Qual é o segundo valor? ")
    document.getElementById("paragrafo").innerText = "Resultado:" + (parseInt( valor01 ) + parseInt ( valor02 ))
    sairLoop = prompt("Deseja sair? S/N")
  }while(sairLoop == "N")
}
