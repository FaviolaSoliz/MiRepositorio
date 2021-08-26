
// promedio

function Promedio (arreglo)

{
    var total = 0;

    var tam = arreglo.length
    for(var i=0 ; i< tam ; i++)

        {
            total = total + arreglo[i];
        }

    var promedio = total /tam;

    return promedio;

}

// aprobados

function Aprobados (arreglo)

{
    var total = 0;

    var tam = arreglo.length
    for(var i=0 ; i< tam ; i++)

        {
            if(arreglo[i]>=51)
            total++;
        }

    return total;

}

function Reprobados (arreglo)

{
    var total = 0;

    var tam = arreglo.length
    for(var i=0 ; i< tam ; i++)

        {
            if(arreglo[i]<51)
            total++;
        }

    return total;

}