// 1. 상수 객체 //
// -> 상수에 저장해둔 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// console.log(animal);

animal.age = 2;  // 기존 객체에 값 추가
animal.name = "까망이"  // 기존 객체에 값 수정
delete animal.color;  // 삭제

// console.log(animal);

// anumal = 123;  // 불가능


// 2. 메서드 //
// -> 값이 함수인 프로퍼티

const person = {
  name: "JS",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
