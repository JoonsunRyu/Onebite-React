// 1. 객체 생성 //
let obj1 = new Object();  // 객체 생성자
let obj2 = {};  // 객체 리터럴 (대부분 이 방법을 사용)


// 2. 객체 프로퍼티 (객체 속성) //
let person = {
  name: "JS",
  age: 27,
  hobby: "자전거",
  job: "student",
  extra: {},  // 함수도 들어올 수 있음
  10: 20,  // 숫자도 key가 될 수 있음
  "like cat": true,  // 띄어쓰기 있으면 따옴표로 감싸줘야 함
};


// 3. 객체 프로퍼티 다루는 방법 //
//  1) 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);  // JS

let age = person["age"];  // age는 반드시 따옴표로 감싸줄 것
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//  2) 새로운 프로퍼티 추가하는 방법
person.job = "FE Developer";
person["favoriteFood"] = "sushi";
console.log(person);

//  3) 프로퍼티 수정하는 방법
person.job = "student";
person["favoriteFood"] = "연어";
console.log(person);

//  4) 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

//  5) 프로퍼티 존재 유무 확인하는 방법
let res1 = "name" in person;
console.log(res1);

let res2 = "cat" in person;
console.log(res2);