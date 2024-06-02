colors=["red","green","yellow","pink","purple","blue"]

console.log(colors)
console.log(colors.length)
//console.log(colors[2])

let x=0;

while(x<colors.length)
{
    console.log(colors[x])
    x++;
}

for(let y=0; y<colors.length; y++)
{
    console.log(colors[y]);
}

for(c of colors){
    console.log(c);
}