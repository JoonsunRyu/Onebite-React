import "./TodoItem.css";
import { memo } from 'react';

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  
  /* Update */
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  /* Delete */
  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly checked={isDone}
        type="checkbox" />
      <div className="contents">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem);  // 객체 타입의 값을 props로 받고 있는 컴포넌트는 이거로 최적화되지 않음

// 고차 컴포넌트 (Higher Order Component, HOC)
export default memo(TodoItem);

// export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라 Props가 바뀌었는지 여부를 확인
  // T -> Props 바뀌지 않음 (리렌더링 X)
  // F -> Props 바뀜 (리렌더링 O)

  // if (prevProps.id !== nextProps.id) return false;
  // if (prevProps.isDone !== nextProps.isDone) return false;
  // if (prevProps.content !== nextProps.content) return false;
  // if (prevProps.date !== nextProps.date) return false;

//   return true;
// });


/* 최적화 */
// 최적화는 가장 마지막 단계에 하는 게 기본! 기능을 먼저 완성하자
// 모든 것들에 최적화를 적용하면 안 됨! (꼭 필요한 연산, 함수, 컴포넌트에만 적용할 것)
// -> 최적화에도 연산이 필요함 (단순 기능은 그냥 두는게 더 빠를 수도 있음)