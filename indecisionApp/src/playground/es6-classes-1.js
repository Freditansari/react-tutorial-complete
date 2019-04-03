class Person {
    constructor(name = 'Anon', age = '0'){
        this.name = name;
        this.age = age;
    }
    getGreetings(){
        return `Hello there ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
       let description = super.getDescription();
       if(this.hasMajor){
           description+= ` his/her major is ${this.major}`;
       }
       return description;
    }


}

class Traveller extends Person{
    constructor(name, age , homelocation='no where'){
        super(name, age);
        this.homelocation=homelocation;
    }

    getGreetings(){
        let greetings = super.getGreetings();
        if(this.homelocation){
            greetings+= ` of ${this.homelocation}`;
        }

        return greetings;
    }

}
const me = new Student('Fredy Yudiawan', 25, 'comp science');
console.log(me.getDescription());

const other = new Traveller('Jono', 40, 'newark');
console.log(other.getGreetings());

const potata = new Traveller();
console.log(potata.getGreetings());