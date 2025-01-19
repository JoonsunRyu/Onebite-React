// 1. 변수 //
let age = 27 // 선언과 초기화
// console.log(age)

age = 30
// console.log(age)


// 2. 상수 //
// const birth;  -> 불가능
const birth = "1998.12.21"
console.log(birth)


// 3. 변수 명명 규칙 //
//  1) $, _ 제외한 기호는 사용 불가
let $_name

//  2) 숫자로 시작할 수 없음
let name1 // 가능
let _2name // 가능
// let 1name;  -> 불가능

// 3) 예약어는 사용 불가
// let, if, for 등


// 4. 변수 명명 가이드 //
// 이렇게 하지 말고
let a = 1
let b = 2
let c = a - b

// 이렇게 하자
let salesCount = 100
let refundCount = 200
let totalSalesCount = salesCount + refundCount
