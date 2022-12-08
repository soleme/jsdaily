/**
 * 즉시실행함수 (IIFE, Immediately Invoked Function Expression)
 * : 정의되자마자 즉시 실행되는 함수
 * 사용 이유
 * 1. 필요없는 전역 변수의 생성을 줄일수 있다.
 *  - 함수를 생성하면 그 함수는 전역 변수로써 남아있게 되고, 많은 변수의 생성은 전역 스코프를 오염시킬수 있다.
 *    즉시실행함수를 선언하면 내부 변수가 전역으로 저장되지 않기 때문에 전역 스코프의 오염을 줄일수 있다.
 * 2. private한 변수를 만들수 있다.
 *  - 외부에서 접근할수 없는 자체적은 스코프를 가지게된다. 이는 클로저의 사용 목적과 비슷하며 내부 변수를 외부로
 *    부터 private하게 보호 할수 있다는 장점이 있다.
 */

(function (){
    console.log("IIFE");
})();

// 화살표 함수로도 사용 가능하다.
(()=>{
    console.log("IIFE");
})();

/**
 * 활용 example
 * 1. 단 한번의 사용이 필요한 함수
 * - 즉시실행함수는 한 번의 실행 이후 없어지기 떄문에 단 한번의 사용한 필요한 함수에 사용된다.
 *   대표적인 예시로는 변수를 초기화 하는 함수
 */

let isAdult;

(function init(age){
    let currentAge = age;
    if(age >= 20){
        isAdult = true;
    }else{
        isAdult = false;
    }
})(20);

console.log(isAdult);
//console.log(currentAge); // not defined

/**
 * 활용 example
 * 2. 자바스크립트 모듈
 * - 자바스크립트 모듈을 만들때에도 많이 활용. 숫자를 세기위한 Count 싱글톤 객첼을 구현해보며 알아본다.
 *   current 변수는 private하기 떄문에 클로저를 통한 접근 외에는 접근 및 수정이 불가능하다.
 */

const Counter = (function counterIIFE(){
    // 현재 counter 값을 저장하기 위한 변수
    let current = 0;

    return{
      getCurrentValue : function (){
          return current;
      },

      increaseValue : function (){
          current = current + 1;
          return current;
      },

      decreaseValue : function (){
          current = current - 1;
          return current;
      }
    };
})();

console.log(Counter.getCurrentValue());
console.log(Counter.increaseValue());
console.log(Counter.decreaseValue());

console.log("----------------------");

(function square(x){
    console.log(x*x);
})(2);

/**
 * 즉시 실행 함수도 함수이기 때문에, 변수에 즉시 실행 함수 저장이 가능함.
 */
(mySquare = function (x){
    console.log(x*x);
})(2);
mySquare(3);