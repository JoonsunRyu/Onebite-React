export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function muntlply(a, b) {
  return a * b;
}


// common JS 모듈 시스템
// module.exports = {
//   add: add,
//   sub,  // key, value 값이 같다면 1번만 적어도 됨
// };


// ES Module 시스템
// export { add, sub };