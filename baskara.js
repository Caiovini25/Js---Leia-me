function baskara(a, b, c)
{
    const vet = [] 
    let x1 = 0
    let x11 = 0
    let x2 = 0
    let x22 = 0
    let d = 0
    d = (Math.pow(b, 2)) - (4*a*c)
    
    if(d < 0)//Verifica se o delta é negativo ou positivo
    {
        console.log(`O Delta ${d} é negativo!`)
    }
    else
    {
        x11 = (-b) + Math.sqrt(d)
        x1 = x11/(2*a)
        vet[0] = x1

        x22 = (-b) - Math.sqrt(d)
        x2 = x22/(2*a)
        vet[1] = x2

        console.log(`O valor de delta é : ${d}`)
        return console.log(`O valor de X1 é : ${vet[0]} e o de X2 é : ${vet[1]}`)
    }
}
baskara(a, b, c)//Chama a função introduzindo os parametros
