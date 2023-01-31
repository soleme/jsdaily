var Cat = function (name, age){
    this.bark = '야옹';
    this.name = name;
    this.age = age;
}

var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);

console.log(choco, nabi);

var func = function (a,b,c){
    console.log(this, a, b, c);
}

func(1,2,3);
func.call({x : 1}, 4,5,6);

var obj = {
    a:1,
    method:function (x, y){
        console.log(this.a, x, y);
    }
}

obj.method(2,3);
obj.method.call({a:4}, 5,6);