// 1. 배열 생성 //
let arr = new Array()  // 배열 생성자
let brr = [];  // 배열 리터럴 (대부분 이렇게 사용)

// 길이 제한없이 추가 가능
let crr = [
  1,
  2,
  3,
  true,
  "hello",
  null,
  undefined,
  () => {},  // 함수
  {},  // 객체
  [],  // 배열
];
console.log(crr);


// 2. 배열 요소 접근 //
let item1 = crr[0];
let item2 = crr[1];

crr[0] = "JS";

console.log(item1, item2);
console.log(crr);