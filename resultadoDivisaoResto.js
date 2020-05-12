function operador(divisor, dividendo)
{
    let resto = 0
    let resultado = 0

    resultado = divisor/dividendo
    resto = divisor % dividendo
    
    console.log(`O resultado é : ${resultado}\nO resto é : ${resto}`)
}
operador(5, 2)
