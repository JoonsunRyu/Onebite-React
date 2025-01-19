// 실습 1
function task() {
  setTimeout(() => {
    console.log("안녕하세요!");
  }, 2000);
}
task();


// 실습 2
function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 2100)
}
add(1, 2);


// 실습 3
function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);  
  }, 2500);
}

add2(1, 2, (value) => {
  console.log(value);
})


// 실습 - 음식 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "쌀국수";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 3500)
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood)
  }, 3700);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
})