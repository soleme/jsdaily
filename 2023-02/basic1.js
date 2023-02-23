var iterable = [3,5,7];

for(var key in iterable){
    console.log(key);
    console.log("in : " + iterable[key]);
}

for(var value of iterable){
    console.log("of : " + value);
}

var items = ['item1', 'item2', 'item3'];

items.forEach((item)=>console.log(item));