function triangulo(c1, c2, c3)
{

    if((c1 != c2) && (c1 != c3))
    {
        console.log('O triangulo é Escaleno!')
    }
    else if ((c1 != c2 && c1 == c3)  || (c1 == c2 && c1 != c3))
    {
        console.log('O triangulo é Isóscles!')
    }
    else
    {
      console.log('O triangulo é Equilatero!')
    }
}
triangulo(2, 1, 0)

