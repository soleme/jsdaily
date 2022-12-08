hoisted();

function hoisted(){
    console.log("foo");
}

/**
 * 정의 되어 있지 않는 변수를 사용하려 하여 에러가 출력
 */
// nothoisted();

let nothoisted = function (){
    console.log("bar");
}

/**
 * 익명함수 표현
 * @param y
 * @returns {number}
 */
let x = function (y) {
    return y * y;
}
console.log(x(2));

/**
 * 기명함수 표현
 * @param y
 * @returns {number}
 */
let xx = function square(y){
    return y * y;
}
console.log(xx(2));


