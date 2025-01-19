import './App.css'
import { useState } from 'react';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Button from './components/Button';
import Bulb from './components/Bulb';
import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';


// Component 만들기 //

// function Header() {  // 방법 1
//   return (
  //     <header>
//       <h1>header</h1>
//     </header>
//   )
// }

// 방법 2
// const Header = () => {  // 컴포넌트 분리함
//   return (
  //     <header>
  //       <h1>header</h1>
  //     </header>
  //   );
  // };

  function App() {  // App()은 루트 컴포넌트 (최상위 컴포넌트)
    // const buttonProps = {
      //   text: "메일",
      //   color: "red",
      //   a: 1,
      //   b: 2,
      //   c: 3,
      // };
      
      // 위 내용(Props, 이벤트)과 함께 실습하려면 아래 내용은 return 안으로 넣어주기
      // <Header />
      // <Main />
      // <Footer />
      
      // <Button {...buttonProps} />
      // <Button text={"카페"} />
      // <Button text={"블로그"} >
      //   <div>자식요소</div>
      // </Button>
      

      // State //      
      // 최상위 컴포넌트 App()에 있던 Bulb, Counter 컴포넌트를 분리
      // 불필요한 렌더링(+버튼 눌렀는데 ON/OFF가 console에 출력되는 현상)이 발생하지 않음
      return (
        <>
      <Bulb />
      <Counter/>
      <hr />
      <Register />
      <hr />
      <HookExam />
    </>      
  );
}

export default App
