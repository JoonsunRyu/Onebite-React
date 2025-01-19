// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);

  value();

  console.log("콜백함수 호출 이후");
}

function sub() {
  console.log("I am sub");
}

main(sub);  // sub를 '콜백함수'라고 함


// 2. 활용 //
// 다음 2개의 함수를
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);

// 아래 형태로 바꿀 수 있음
function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat2(5, (idx) => {
  console.log(idx);
})

repeat2(5, (idx) => {
  console.log(idx * 2);
})
