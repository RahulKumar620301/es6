person={
    firstName: 'Rahul',
    lastname:'kumar',
    gender:'Male',
    dob:'1980-01-12'
}

console.log(person.firstName)
let k=Object.entries(person)
for(x of k)
{
    console.log(`${[0].toUpperCase()}:: ${x[1]}`)
}