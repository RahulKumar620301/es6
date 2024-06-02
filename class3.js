class course{
    constructor(n,d,f){
        this.name=n;
        this.duration=d;
        this.fee=f;
    }
    getcourseInfo(){
        console.log(`course: ${this.name} Fee: ${this.fee} Period ${this.duration}`)
    }

}

class student extends course{
    constructor(sn,i,n,d,f){
        super(n,d,f)
        this.sname=sn;
        this.id=i;
    }
    getstudentInfo(){
        console.log(`student: ${this.sname} Id: ${this.id}`)
        super.getcourseInfo();
    }
}

stu1= new student('Khud Mai', 'nhi chahiye','English','4-5 janam toh lag hi jayenge', 'kitne bhi paise lage english phir v nhi aani.')
stu1.getstudentInfo();