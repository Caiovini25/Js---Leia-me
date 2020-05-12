function f1(capitalInicial,taxaJuros, tempoAplicacao)//Função que calcula os juros simples
{
    let montante = 0
    montante = capitalInicial * taxaJuros * tempoAplicacao
    return montante
}

function f2(capitalInicial,taxaJuros, tempoAplicacao)//Função que calcula os juros composto
{
    let montante = 0 
    montante = capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao)
    return montante
}

console.log('Montante da aplicação financeira : ', f1(1, 2, 3))//Muda-se os numeros passados nos parametros para ter os resultados esperados
console.log('Valor da aplicação sob juros composto : ', f2(1, 2, 3))//Muda-se os numeros passados nos parametros para ter os resultados esperados
