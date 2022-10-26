
var tablica1 = [2,12,19,3,18,4,9,14];

var tabi = [2,5,3];

function range(a, b) {
    var result = [];

    for (var i = a; i<= b; i++) {
        result.push(i);
    }

    return result;
}

function sum (array)
{
    var suma=0;

    for (var i=0; i<array.length; i++)
    {
        suma= suma + array[i];
    }

return suma;

}

function multiplyBy2 (x)
{
    return x*2;
}

function sub7 (x)
{
    return x-7;
}

var divBy2 =  function(x)
{
    return x%2==0;

}

function do10 (x)
{
    return (x>=0 && x<=10);
}

function map (array, transform)
{
    var newTab= [];

    for (var i=0; i < array.length; i++)
    {
        newTab[i] = transform(array[i]);
    }

    return newTab;
}

function filter(array, fun)
{
    var x= array.length;
    var nowa= [];

    for (var i=0; i<x; i++)
    {
        if (fun(array[i]))
        {
            nowa.push(array[i]);
        }
    }

    return nowa;

}


// tablica od 1 do 100
// wybieramy przyste
// mnozymy przez 3
// odejmujemy 7
// na koniec mozemy zsumowac cala tablice

var nowaDo100 = range(1,100);

var nowa1= filter(nowaDo100, divBy2);

var nowa2= map(nowa1, multiplyBy2);

var nowa3= map(nowa2, sub7);

var nowa4= sum(nowa3);




console.log(nowa4);

