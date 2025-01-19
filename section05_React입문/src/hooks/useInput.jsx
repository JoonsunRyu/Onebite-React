import { useState } from 'react';

function useInput() {
  const [input, setInput] = useState("");  // 에러 발생

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;