// 1. Falsy 값 //
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;  // BigInt

if (!f1) {
  console.log("falsy");
}


// 2. Truthy 값 //
// -> 7가지 Falsy한 값을 제외한 나머지 (나열 불가)
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};


// 3. 활용 사례  //
function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);

// 효율적으로 작성해보면
function printName2(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person2 = {name: "JS"};
printName2(person2);
