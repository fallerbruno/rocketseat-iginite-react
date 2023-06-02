import styles from "./List.module.css";
import { PlusCircle } from "phosphor-react";
import { Player } from "@lottiefiles/react-lottie-player";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Todo } from "./Todo";
import { ListHeader } from "./ListHeader";
interface todoProps {
  id: number;
  todo: string;
  checked: boolean;
}
export function List() {
  const [todoList, setTodoList] = useState<todoProps[]>([]);
  const [todoText, setTodoText] = useState<string>("");

  function handleCreateNewTodoText(event: FormEvent) {
    event.preventDefault();
    setTodoList([...todoList, { id: todoList.length + 1, todo: todoText, checked: false }]);
    setTodoText("");
  }
  //declara q foi feito no HTMLTextAreaElement
  function handlenewTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTodoText(event.target.value);
  }

  function handlenewTodoTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("O comentário não pode ser vazio!");
  }

  function deleteTodo(todoToDelete: string) {
    const todoListWhithoutDeletedOne = todoList.filter((todo) => {
      return todo.todo !== todoToDelete;
    });
    setTodoList(todoListWhithoutDeletedOne);
  }

  function checkTodoList(todo: todoProps) {
   const updatedTodoList = todoList.map((element) => {
      if (element.id === todo.id) {
        element.checked = !element.checked;
      }
      return element;
   })
   setTodoList(updatedTodoList);
  } 

  return (
    <>
      <form className={styles.todoForm} onSubmit={handleCreateNewTodoText}>
        <input
          placeholder="Adicione uma nova Tarefa"
          onChange={handlenewTodoTextChange}
          value={todoText}
          onInvalid={handlenewTodoTextInvalid}
          required
        />

        <button type="submit">
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </form>

      <ListHeader todoList={todoList} />

      <div className={styles.container}>
        <div className={styles.todo}>
          {todoList.length === 0 ? (
            <div className={styles.empty}>
              <h3>Você ainda não tem tarefas cadastradas</h3>
              <h4> Crie tarefas e organize seus itens a fazer</h4>
              <Player
                src="https://assets3.lottiefiles.com/private_files/lf30_e3pteeho.json"
                loop
                autoplay
                style={{ height: "300px", width: "300px" }}
              />
            </div>
          ) : (
            <div className={styles.contain}>
              {todoList.map((todo) => {
                return (
                  <Todo onDeleteTodo={deleteTodo} todo={todo} key={todo.id} checkTodoList={checkTodoList} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
