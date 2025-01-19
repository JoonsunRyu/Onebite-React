function returnFalse() {
  // console.log("False 함수");
  return false;  // undefined 와도 됨
}

function returnTrue() {
  // console.log("True 함수")
  return true;  // 10 또는 문자열 와도 됨
}

// console.log(returnFalse() && returnTrue());  // returnTrue() 실행되지 않음 -> 단락평가 이루어짐
// console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());  // returnFalse() 실행되지 않음 -> 단락평가 이루어짐


// 단락 평가 활용 사례 //
function printName(person) {
  // if (!person) {
  //   console.log("prson에 값이 없음");
  //   return;
  // }
  console.log(person && person.name);
}
printName();

function printName2(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName2();
printName2({name: "JS"});
