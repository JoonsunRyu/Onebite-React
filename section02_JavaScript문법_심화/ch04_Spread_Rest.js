// 1. Spread 연산자 //
// -> Spread: 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// 배열에 적용
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

// console.log(arr2);

// 객체에 적용
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
}
// console.log(obj2);

// 함수에 적용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);


// 2. Rest 매개변수
// -> 나머지 매개변수

function funcB(...rest) {  // spread 연산자 아님! (rest 매개변수)
  console.log(rest);
}
funcB(...arr1);

function funcC(one, ...rest) {  // rest 매개변수는 반드시 마지막에 위치해야 함!
  console.log(rest);            // ... 뒤에 올 이름은 아무거나 설정 가능!
}
funcC(...arr1);