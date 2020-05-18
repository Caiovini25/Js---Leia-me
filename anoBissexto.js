function anoBi(ano)
{
    if(ano % 4 == 0)
    {
        return console.log('É um ano bissexto!\n' ,true)
        
    }
    else if(ano % 100 != 0)
    {
        return console.log('Não é um ano bissexto!\n' ,false)
    }
    else if(ano % 400 == 0)
    {
        return console.log('É um ano bissexto!\n' ,true)
    }
}
anoBi(2016)
