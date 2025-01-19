import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  
  /* Read */
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List🍀</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {  // 배열에 담긴 데이터를 map 메서드를 통해 리스트 형태로 렌더링 가능 
          // return <div>{todo.content}</div>;  // 이렇게 해도 결과 나옴
          return ( 
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />  // key값을 전달해줘야 함
          );
        })}
      </div>
    </div>
  );
};

export default List;