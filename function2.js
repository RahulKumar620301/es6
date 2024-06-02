//arrow function

let greet= (n) => console.log('Hello '+n);
let pro= (x,y,z) => x*y*z;
let sqr=(x) =>x*x;
let avg= (x,y=0,z=0)=>(x+y+z)/3;
let amt=(q=1,r=100,d=0) => (q*r)-((q*r*d)/100);

greet("Rahul")
let k=pro(4,6,8.7)
console.log(k)
console.log(sqr(8.6))
console.log(avg(8,6))
console.log(amt(8,600,3.5))
console.log(amt(8,600))
console.log(amt(8))
console.log(amt())