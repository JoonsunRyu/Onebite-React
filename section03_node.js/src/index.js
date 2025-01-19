// console.log("Hi, Node.js");

// common JS 모듈 시스템
// const moduleData = require("./math");
// const { add, sub } = require("./math");  // 구조분해할당

// console.log(moduleData.add(1, 2));
// console.log(sub(1, 2));  // 구조분해할당 쓰면 이렇게 하면 됨


// ES Module 시스템
// import mul from "./math.js";  // default를 썼다면 -> 이름 마음대로 지을 수 있으며, { }에 넣어주지 않아도 됨
// import { add, sub } from "./math.js";  // 확장자까지 명시해야 함!
import mul, {add, sub} from "./math.js";  // 출처가 같다면 한번에 import 가능

// console.log(add(1, 2));
// console.log(sub(1, 2));


// RandomColor 라이브러리 사용해보기
import randomColor from "randomcolor";
const color = randomColor();
console.log(color);