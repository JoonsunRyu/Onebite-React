import './App.css'
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  { id: 1,
    isDone: false,
    content: "밥먹기",
    date: new Date().getTime(),
  },
  { id: 2,
    isDone: false,
    content: "잠자기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  /* Create */
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    };
    // todos.push(newTodo)  절대 안 됨. state 값은 상태변화 함수 호출을 통해서만 수정해야 함
    setTodos([newTodo, ...todos]);
  };

  /* Read는 List.jsx에서 */

  /* Update */
  const onUpdate = (targetId) => {
    // todos State의 값들 중
    // targetId와 일치하는 id를 갖는 Todo 아이템의 isDone 변경하자

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열 만들자
    setTodos(todos.map((todo) => {
      if (todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo
      
      // 또는
      // todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo

    }))
  }

  /* Delete */
  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
    
  );
}

export default App
