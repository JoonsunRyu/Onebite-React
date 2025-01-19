import './App.css'
import { useState, useRef, useReducer, useCallback, createContext } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
// import Example from './components/Example';

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

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
        ? {...item, isDone : !item.isDone}
        : item
      );
    
      case 'DELETE':
        return state.filter((item) => item.id !== action.targetId)
      
      default:
        return state;
  }
}

export const TodoContext = createContext();  // 컴포넌트 외부에 선언하는게 일반적

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  /* Create */
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  /* Read는 List.jsx에서 */

  /* Update */
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    });
  }, []);

  /* Delete */
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, [])

  return (
    <div className="App">
      {/* <Example /> */}
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
