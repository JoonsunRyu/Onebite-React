import "./Editor.css";
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();


  /* 이벤트 핸들러 */
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 엔터키 누르면
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {  // "Enter키 코드" == 13
      onSubmit();
    }
  }


  /* Create */
  const onSubmit = () => {
    // input 폼이 비어 있다면
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    // 아니면 값 정상 반영
    onCreate(content);
    setContent("");  // 입력 후 inut box 값 초기화
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )  
}

export default Editor;