var obj = {
    a:1,
    method:function(x,y){
        console.log(this.a, x, y);
    }
}
obj.method(2,3,);
obj.method.call({a : 4}, 5, 6);

var func = function (a,b,c){
    console.log(this, a, b, c);
}

func.apply({x : 1}, [2,3,4,]);

var obj2 = {
    a : 1,
    method : function (x, y){
        console.log(this.a, x, y);
    }
}

obj2.method.apply({a:4},[5,6]);