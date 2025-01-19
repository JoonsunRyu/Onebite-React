// 동기적 실행
console.log(1);
console.log(3);


// 비동기적 실행
console.log(5);

setTimeout(() => {
  console.log(6);
}, 3000);

console.log(7);

// 비동기 작업들은 Web APIs에서 실행됨 (JavaScript 엔진에서 실행되지 않음!)
// 이를 통해 동시에 작업을 수행할 수 있음