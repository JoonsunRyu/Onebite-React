// async
// -> 어떤 함수를 비동기 함수로 만들어주는 메서드
// -> 함수가 Promise를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "JS",
    id: "jsr2198",
  };
}
console.log(getData());


async function getData2() {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver({
        name: "JS",
        id: "jsr2198",
      });
    }, 1500);
  });
}
console.log(getData2());


// await
// -> async 함수 내부에서만 사용이 가능한 키워드
// -> 비동기 함수가 모두 처리되기를 기다리는 역할
async function printData() {
  const data = await getData();
  console.log(data);
}
printData();