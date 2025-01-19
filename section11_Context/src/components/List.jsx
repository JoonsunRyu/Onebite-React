import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from 'react';
import { TodoContext } from "../App";

const List = () => {
  const {todos} = useContext(TodoContext);
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

  const { totalCount, doneCount, notDoneCount } =
    useMemo(() => {
      console.log("getAnalyzeData 호출!");  // search bar에 검색어를 입력할 때마다 등장(Re-lendering)
      const totalCount = todos.length;
      const doneCount = todos.filter(
        (todo) => todo.isDone
      ).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount,
      }
    }, [todos]);  // 의존성 배열(deps)
    // deps에 todos 넣어주지 않으면 새로운 값을 추가해도 count에 반영되지 않음

  // const {totalCount, doneCount, notDoneCount} = getAnalyzeData();

  return (
    <div className="List">
      <h4>Todo List🍀</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {  // 배열에 담긴 데이터를 map 메서드를 통해 리스트 형태로 렌더링 가능 
          return ( 
            <TodoItem
              key={todo.id}
              {...todo}
            />  // key값을 전달해줘야 함
          );
        })}
      </div>
    </div>
  );
};

export default List;