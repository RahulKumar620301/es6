class student{
    

    constructor(n,c,d,r){
        this.name=n;
        this.course=c;
        this.duration=d;
        this.rate=r;
    }

    display(){
        console.log(`Name: ${this.name} , course: ${this.course} , duration: ${this.duration} year , rate: ${this.rate}`)
    }
}

s1=new student('Ayush','alphabet',1,100)
s2=new student('chidhu','modern physics',1,1000)
s1.display();
s2.display();