function Person(name){
    this.name = name;
    this.sayHello  = function (){
        console.log(`${this.name}: hello!`);
    }
}

const chris = new Person('chris');
chris.sayHello();