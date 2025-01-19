// 1. Nuber
let num1 = 26;
let num2 = 1.4;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);  // 모듈러 연산도 가능

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;  // 실수 연산 실패했을 때 결과값

// console.log(1 * "hello");


// 2. String
let myName = "JS";
let myLocation = "서울";
let introduce = myName + myLocation;

let introduceTest = `${myName}는 ${myLocation}에 거주합니다.`;  // 템플릿 리터럴 문법 (실무에서도 많이 쓰임)

// console.log(introduce);
// console.log(introduceTest);


// 3. Boolean
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type - "아무것도 없음"
let empty = null;


// 5. Undefined Type - 초기화하지 않았거나 존재하지 않는 값을 불러오려고 할 때
let none;
console.log(none);