// 스코프 //
// 전역 스코프: 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서만 접근 가능

let a = 1;  // 전역 스코프

// 함수에서
function funcA() {
  let b = 2;  // 지역 스코프
  console.log(a);
  console.log(b);

  function funcB() {}  // 함수도 지역 스코프 대상!
  // 조건문, 반복문 안에서 함수 선언식은 스코프 대상은 아님 (이렇게 쓰는 경우는 거의 없음)
}

funcA();
// console.log(b);  // 접근 불가!

// 조건문에서
if (true) {
  let c = 1;  // 지역 스코프
}
// console.log(c);  // 접근 불가!

// 반복문에서
for (let i = 0; i < 10; i++) {
  let d = 1;
}
// console.log(d);  // 접근 불가!
