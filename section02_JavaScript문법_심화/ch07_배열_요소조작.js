// 6가지의 요소 조작 메서드

// 1. push //
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
// console.log(arr1);

const newLength = arr1.push(5, 6, 7);
// console.log(arr1);
// console.log(newLength);


// 2. pop //
// -> 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();  // 뽑힌 요소

// console.log(popedItem);
// console.log(arr2);


// 3. shift //
// -> 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem);
// console.log(arr3);


// 4. unshift //
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4);

// * push, pop보다 shift, unshift가 느림 * //
// 요소의 인덱스를 이동시켜야 하므로 느리게 동작할 수밖에 없음
// 되도록이면 push와 pop을 통해 처리하자


// 5. slice //
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-2);

// console.log(sliced);   // 이거랑
// console.log(sliced2);  // 이거는 같은 결과!
// console.log(sliced3);
// console.log(arr5);  // 원본 배열의 값은 변하지 않음!


// 6. concat //
// -> 2개의 서로 다른 배열을 이어붙여 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);