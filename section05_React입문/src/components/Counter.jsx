import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);  // 0번지 -> state의 초기값, 1번지 -> state를 변경시키는 상태 변화 함수
  
  return (
    <div>
        <h1>{count}</h1>
        <button
          onClick = {() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
  );
};

export default Counter;