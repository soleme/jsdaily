function makeFunc3() {
    let name = "mattew";
    function displayName1(val) {
        name = '1' + val;
        console.log(name);
    }
    function displayName2(val) {
        name = '2' + val;
        console.log(name);
    }
    function val(){
        return name;
    }

    return { displayName1, displayName2, val };
}

let myFunc3 = makeFunc3();
// myFunc3.displayName1("jack");
console.log(myFunc3.val());

// 화살표 함수에서의 클로저
const operator = (oper) => (x, y) => console.log( x + oper + y);
let plus = operator('+');
plus(3,4);