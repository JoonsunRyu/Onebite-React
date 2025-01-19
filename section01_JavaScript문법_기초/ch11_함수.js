// 함수의 선언
function greeting () {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");


// 직사각형 넓이 구하는 함수
function getArea (width, height) {  // 매개변수
  // let width = 10;
  // let height = 20;
  let area = width * height;

  console.log(area);
}

// getArea();  // 200
getArea(10, 20);  // 200
getArea(30, 20);  // 600


// 다른 예시
function getArea2 (width, height) {  // 매개변수
  let area = width * height;

  return area;
}

let area1 = getArea2(10, 20);
let area2 = getArea2(324, 111);
console.log(area1);
console.log(area2);


// 호이스팅
// -> 현재 행에서 getArea3()을 호출할 수 있음
getArea3();  // 나는 중첩함수 2번 나옴


// 중첩 함수
function getArea3 (width, height) {
  function another() {
    console.log("나는 중첩함수");
  }
  
  another();
  let area = width * height;
  
  return area;
}

let area3 = getArea3(60, 70);
console.log(area3);
