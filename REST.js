function sum(...n)
{
    let s=0;
    for(x of n)
    {
        s+=x;
        return s;
    }
}

console.log(sum(4))
console.log(sum(4,7,8))
console.log(sum(7,9,4,2,7))
