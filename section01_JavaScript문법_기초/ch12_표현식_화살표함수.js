// 1. 함수 표현식
// -> varB처럼 만든 것 (호이스팅 대상 아님)
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
  // console.log("funcB");
};
varB();
// funcB();  // 에러


// 익명 함수 //
let varC = function () {
  // console.log("funcC");
};
varC();


// 2. 화살표 함수 //
let varD = () => {
  return 1;
};

console.log(varD());

// 1줄로도 작성 가능!
let varE = (value) => value + 1;
console.log(varE(10));
