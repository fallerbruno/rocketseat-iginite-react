import { useState } from "react";
import styles from "./Todo.module.css";
import { Trash } from "phosphor-react";

interface todoProps {
  todo: {
    id: number;
    todo: string;
    checked: boolean;
  };
  onDeleteTodo: (onDeleteTodo: string) => void;
  checkTodoList: (checkTodoList: object) => void;
}

export function Todo({todo, onDeleteTodo, checkTodoList} : todoProps) {
  const [todoChecked, setTodoChecked] = useState<boolean>(false);
  const check = todoChecked;

  function handleDeleteTodo() {
    onDeleteTodo(todo.todo);
  }
  
  function handleCheckTodo() {
    setTodoChecked(!todoChecked);
    todo = {
      id: todo.id,
      todo: todo.todo,
      checked: check
    }
    checkTodoList(todo);
  }

  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              handleCheckTodo()
            }}
          />
          {check ? (
            <span className={styles.checked}>
              {todo.todo}
            </span>
          ) : (
            <span>
              {todo.todo}
            </span>
          )}
        </label>
      </div>
      <button>
        <Trash size={20} onClick={handleDeleteTodo}/>
      </button>
    </div>
  );
}
