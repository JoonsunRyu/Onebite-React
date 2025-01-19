// 1. 묵시적 형 변환 //
//  -> 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = '20';

const result = num + str;
// console.log(num + str);  // 1020 출력


// 2. 명시적 형 변환 //
// -> 개발자가 내장함수를 이용하여 직접 형 변환을 명시하는 것

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");