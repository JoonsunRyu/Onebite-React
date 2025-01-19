// 실습 1
const promise = new Promise(() => {
  // 비동기 작업을 실행하는 함수 - executor
  setTimeout(() => {
    console.log("안녕?");
  }, 2000)
});
console.log(promise);  // PromiseState: Pending


// 실습 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕?");
    resolve();
  }, 2500);
});

setTimeout(() => {
  console.log(promise2);  // PromiseState: fulfilled
}, 3000);

// 여전히 PromiseResult는 undefined


// 실습 3
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕?");
    resolve("안녕?");
  }, 3500);
});

setTimeout(() => {
  console.log(promise3);  // PromiseState: fulfilled & PromiseResult: "안녕?"
}, 4000);


// 실습 4
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕?");
    reject("실패한 이유좀...");  // 비동기 작업 실패
  }, 4000);
});

setTimeout(() => {
  console.log(promise4);  // PromiseState: fulfilled & PromiseResult: "안녕?"
}, 4500);


// 실습 5
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 5000);
});

setTimeout(() => {
  console.log(promise5);  // PromiseState: fulfilled & PromiseResult: "안녕?"
}, 4500);


// 실습 6
const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 5000);
});

promise6.then((value) => {
  console.log(value);  // 20 출력
})


// 실습 7
const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 5000);
});

promise7.then((value) => {
  console.log(value);
});

promise7.catch((error) => {
  console.log(error);
});

// 이런 식으로 작성해도 됨 (Promise chaining 기법)
// promise7
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// 실습 8
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 5500);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  // console.log(result)
});

// 콜백지옥 만들어보기 (비추)
// const p2 = add10(0);
// p2.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

// 코드 개선
const p3 = add10(0);
p3.then((result) => {
  // console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    // console.log(result);
  });
  return newP;
  // return add10(result)  // 1줄로 줄일 수도 있음
})
.then((result) => {
  // console.log(result);
})

// 최종 응용
add10(0)
  .then((result) => {
    console.log(result);  // 10
    return add10(result);
  })
  .then((result) => {
    console.log(result);  // 20
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);  // 174행 입력값에 따라 결과 달라짐
  })
  .catch((error) => {
    console.log(error);  // num이 숫자가 아닙니다.
  });