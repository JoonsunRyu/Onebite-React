// 1. Date 객체 생성하기
let date1 = new Date();  // Date()는 생성자
// console.log(date1);  // 오늘 날짜 + 시간

let date2 = new Date("1998-12-21");  // -대신 슬래시(/)나 .과 ,으로도 가능
// console.log(date2);


// 2. 타임 스탬프 //
// 특정 시간이 "1970.01.01 00시 00분 00초로부터 몇 ms가 지났는지 의미하는 숫자값"
// UTC (협정 세계시)  -> 시간이 시작되는 표준 지점 <세계 표준>
let ts1 = date1.getTime();
// console.log(ts1);

let date3 = new Date(ts1);
// console.log(date1, date3);  // date1과 date3은 같은 시간


// 3. 시간 요소 추출하기 //
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month + 1, date, hours, minutes, seconds);  // JS의 월(month)은 0부터 시작함!


// 4. 시간 수정하기 //
date1.setFullYear(2024);
date1.setMonth(11);  // 11 = 12월
date1.setDate(31);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);


// 5. 시간을 여러 포맷으로 출력하기 //
console.log(date1.toDateString());
console.log(date1.toLocaleString());
