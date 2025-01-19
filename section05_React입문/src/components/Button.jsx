// const Button = (props) => {
//   console.log(props);
//   return (<button style={{ color: props.color }}>
//     {props.text} - {props.color.toUpperCase()}
//     </button>  // 에러 발생 (undefinded를 대문자화 하려고 해서)
//     );
// };

// 구조분해할당
const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {  // 합성 이벤트 객체 -> 모든 브라우저에서 사용 가능한 통합된 규격의 이벤트 객체
    console.log(e);
    console.log(text);
  }
  return (
    <button
      onClick = {onClickButton}  // onClickButton() 하면 안 됨!!!
      // onMouseEnter = {onClickButton}  // Mouse 커서 올렸을 때
      // onClick = {() => {  // Event Handler
      //   console.log(text);
      // }}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;