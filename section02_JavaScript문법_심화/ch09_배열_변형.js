// * 5가지 배열 변형 메서드 * //
// 1. filter //
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "JS", hobby: "자전거" },
  { name: "JJ", hobby: "자전거" },
  { name: "SS", hobby: "러닝" },
];

const bicyclePeople = arr1.filter((item) => {
  if (item.hobby === "자전거") return true;
  // (item) => item.hobby === "자전거"
});

// console.log(bicyclePeople);


// 2. map //
// -> 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고,
//    그 결과값들을 모아 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);


// 3. sort //
// -> 배열을 사전순으로 정렬하는 메서드 (숫자의 대소비교 X)
let arr3 = ["b", "a", "c"];
let arr3_1 = [10, 3, 5];

arr3.sort();
arr3_1.sort();

// console.log(arr3);    // 정렬 Yes
// console.log(arr3_1);  // 정렬 No

// 숫자 오름차순 정렬을 원한다면 이렇게
arr3_1.sort((a, b) => {
  if (a > b) {
    // b는 a앞으로
    return 1;  // b, a 순으로 배치
  }
  else if (a < b) {
    // a가 b앞으로
    return -1;  // a, b 순으로 배치
  }
  else {
    return 0;  // a, b 순서 바꾸지 마
  }
});

// console.log(arr3_1);
// return 부분의 -1, 1 바꾸면 내림차순 정렬이 됨


// 4. tosorted //  -> 가장 최근에 추가된 함수
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);    // 원본 배열
console.log(sorted);  // 정렬된 배열


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["Hi,", "I am", "JS"];
const joined = arr6.join(" ");  // 구분자 설정 가능
console.log(joined);