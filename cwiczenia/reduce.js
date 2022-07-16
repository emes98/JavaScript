
const add2= (a,b) => a+b;

const add3= (a,b,c) => add2((add2(a,b)),c);

const x= add3(1,2,3);

const tab= [2,4,1,2];

console.log(tab);

var z= tab.reduce(add2,0);

console.log(z);

var y= tab.reduce((a,b)=> a*b);

console.log(y);

const func = function (a,b)
{
    return a*b;
}

var yy= tab.reduce(func,1);

console.log(yy);

const fn = (a,b) => a && (b%2 !== 0);

const g= tab.reduce(fn,true);

console.log(g);


