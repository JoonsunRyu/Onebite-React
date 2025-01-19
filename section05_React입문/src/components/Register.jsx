import { useState, useRef } from 'react';

// 간단한 회원가입 폼 만들기
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);  // form의 수정 횟수 count
  const inputRef = useRef();

  // 심화 내용 - let으로 변수 선언한다면?
  let count = 0;

  // 통합 이벤트 핸들러로 묶어주기
  const onChange = (e) => {
    countRef.current++;
    // console.log(countRef.current);  // 수정 횟수 출력
    console.log(e.target.name, e.target.value);

    // 심화 내용 출력하기
    // count++;
    // console.log(count);  // 1로 고정, 입력될 때마다 Re-rendering 되니까
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   })
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   })
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   })
  // };

  // const onChageBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   })
  // };

  return (
    <div>
      <div>
        <input
        ref={inputRef}
        name="name"
        value={input.name}
        onChange={onChange}
        placeholder={"이름"}
        />
      </div>

      <div>
        <input
        name="birth"
        value={input.birth}
        onChange={onChange}
        type="date"
        />
      </div>

      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="Korea">한국</option>
          <option value="USA">미국</option>
          <option value="UK">영국</option>
        </select>
      </div>

      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;