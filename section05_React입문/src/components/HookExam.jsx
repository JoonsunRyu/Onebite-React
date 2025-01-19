import useInput from "../hooks/useInput";

// Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState();  // 아무것도 렌더링되지 않음 (컴포넌트 내부에서만 호출해야 함!!)

// 2. 조건부로 호출될 수 없음
// '하면 안 되는 짓' 부분 참고

// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있음  ->  hooks/useInput.jsx 참고

const HookExam = () => {
  const [input, onChange] = useInput("");
  const [input2, onChange2] = useInput("");


  // 하면 안 되는 짓 (조건문, 반복문 사용 불가!!)
  // if (true) {
  //   const state = useState();
  // }

  // for (::) {
  //   // code
  // }

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;