import "./Main.css"

const Main = () => {
  // JSX 주의사항 //
  // 1. 중괄호 내부에는 JavaScript 표현식만 넣을 수 있음
  //    값으로 나타낼 수 있는 것들만 포함 가능! (ex. 삼항 연산자, 값, 변수명 등)
  //    조건문 불가


  // 2. 숫자, 문자열, 배열값만 렌더링
  //    boolean, undefined, null은 렌더링 X
  //    {obj} -> 객체는 사용 불가! (입력하면 백지화, 개발자도구 console에서 에러 발생)


  // 3. 모든 태그는 닫혀 있어야 함 (닫는 태그 생략 불가)


  // 4. 최상위 태그는 반드시 1개여야 함
  //    또는 <>로 (빈 태그)


  const user = {
    name: "JS",
    isLogin: true,
  };
  
  // 실습 1 (심심하면 주석 풀면서 확인해봐)
  // const number = 10;
  
  // return (
    //   <main>
    //     <h1>main</h1>
    //     <h2>{number}</h2>
    //     <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
    //     <h5>{23}</h5>
    //     <h5>[1, 2, 3]</h5>
    //     {true}
    //     {undefined}
    //     {null}
    //     {obj}
    //   </main>
    // );


    // 실습 2
    // return (
      //   <>
      //     {user.isLogin ? (
      //       <div>로그아웃</div>
      //     ) : (
      //           <div>로그인</div>
      //     )}
      //   </>
      // )

    // 실습 3
    if (user.isLogin) {
      return <div className="logout">로그아웃</div>
    }
    else {
      return <div>로그인</div>;
    }

    
  };

export default Main;