const reduce = function (array, reducer, start)
{
    let wynik = start;

    for (let i=0; i<array.length; i++)
    {
        wynik = reducer(wynik,array[i])
    }

    return wynik;
};

const tab = [1,3,4,2];

const newTab = reduce(tab, (a,b) => a*b, 1);

console.log(newTab);

function testEmptyArray()
{
    const result = reduce([], (a,b) => a*b, 1)
    const expected = 1; 

    if (result===expected)
    {
        console.log("[OK] Dla pustej tablicy działa jak powinno");
    }

    else 
    {
        console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
    }
}

function oneElementArray()
{
    const result = reduce([3], (a,b)=>a*b, 1)
    const expected = 3;

    if (result===expected)
    {
        console.log("[OK] Dla tablicy z jednym elementem działa jak powinno");
    }

    else 
    {
        console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
    }
}

function multiplyElementsArray()
{
    const result = reduce([1,2,3,4], (a,b)=>a*b, 1)
    const expected = 24;

    if (result===expected)
    {
        console.log("[OK] Dla tablicy z więcej niż 1 elementem działa jak powinno");
    }

    else 
    {
        console.log("[FAILED] Powinno zwrócić", expected, "a zwróciło", result);
    }
}


testEmptyArray();
oneElementArray();
multiplyElementsArray();

