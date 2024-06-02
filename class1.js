class Employee{
    static pf=3;
    constructor(n,s){
        this.name=n;
        this.salary=s;
    }

    display(){
        console.log(`Name: ${this.name} and Basic Salary ${this.salary}`)
        this.ts=this.salary+this.bonous;
        console.log(`Bonous ${this.bonous} and total Salary ${this.ts}`)
        this.pfAmt=this.ts*Employee.pf/100
        console.log(`pf: ${this.pfAmt}(${Employee.pf}%) and Net salary ${this.ts-this.pfAmt}`)
    }

    setBonous(b)
    {
        this.bonous=b;
    }
}

emp1=new Employee('Ayush',00002)
emp2=new Employee('CHIDHU',20000)
emp1.setBonous(5)
emp1.display()
emp2.setBonous(1200)
emp2.display()