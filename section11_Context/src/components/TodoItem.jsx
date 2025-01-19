import "./TodoItem.css";
import { memo, useContext } from 'react';
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);

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

// 고차 컴포넌트 (Higher Order Component, HOC)
export default memo(TodoItem);
