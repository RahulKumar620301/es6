person={
    fisrstName:'Rahul',
    lastName:'Kumar',
    getFullName: function(){
        return this.fisrstName+" "+this.lastName
    },
    getInitial: function(){
        return this.fisrstName[0]+""+this.lastName[0]
    }
}

console.log(person.getInitial()+" "+person.getFullName())


console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
