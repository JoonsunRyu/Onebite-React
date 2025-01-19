// 5가지 요소 순회 및 탐색 메서드

// 1. forEach //
// -> 모든 요소를 순회하면서, 각 요소에 특정 동작을 수행하는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
})

// console.log(doubledArr);


// 2. includes //
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
let isInclude2 = arr2.includes(10);

// console.log(isInclude);
// console.log(isInclude2);


// 3. indexof //
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let arr3_1 = [2, 2, 2];

let index = arr3.indexOf(2);
let index2 = arr3_1.indexOf(2);
let index3 = arr3_1.indexOf(10);

// console.log(index);
// console.log(index2);  // 중복되는 경우 첫 번째 원소의 인덱스만 출력
// console.log(index3);  // 없으면 -1 출력


// 4. findIndex //
// -> 모든 요소를 순회하면서 콜백함수를 만족하는  특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findIdx = arr4.findIndex((item) => {
  if (item === 2) return true;
});
console.log(findIdx);

const findIdx2 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

// 이렇게도 작성 가능
// const findIdx2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findIdx2);

const findIdx3 = arr4.findIndex(
  (item) => item === 999  // 없는 값이면 -1 출력
);

console.log(findIdx3);

// 심화 //
let objectArr = [
  { name: "JS" },
  { name: "홍길동" },
];

console.log(
  objectArr.indexOf({ name: "JS" })  // 못 찾음 => indexOf는 '얕은 비교'로 동작하기 때문에 객체값은 찾지 못함
);
// => 동등비교 연산자 활용함 (참조값 기준)
// => 프로퍼티 값 기준으로는 비교가 이루어지지 않음
// => 특정 객체값이 있는지 확인하기 위해 findIndex 메서드를 씀

console.log(
  objectArr.findIndex((item) => item.name === "JS"
  )
);


// 5. find //
// -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 요소를 그대로 반환
let arr5 = [
  { name: "JS" },
  { name: "홍길동" },
];

const found = arr5.find(
  (item) => item.name === "JS"
);

console.log(found);