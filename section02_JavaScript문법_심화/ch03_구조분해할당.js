// 1. 배열의 구조 분해 할당 //
let arr = [1, 2, 3];

// 불편한 방법
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;
console.log(one, two, three);

let [one1, two2, three3, four4] = arr;
console.log(one1, two2, three3, four4);  // four4 자리엔 undefined (four4 = 4 하면 1 2 3 4 출력)


// 2. 객체의 구조 분해 할당 //
let person = {
  name: "JS",
  age: 27,
  hobby: "자전거",
};

let { name, age, hobby, extra="hello" } = person;
console.log(name, age, hobby, extra);


// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수 받기
const func = ({name, age, hobby, extra}) => {
  console.log(name, age, hobby, extra);
};

func(person);
