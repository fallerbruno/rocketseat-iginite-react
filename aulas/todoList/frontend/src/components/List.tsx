import { ListHeader } from "./ListHeader";
import styles from "./List.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { Todo } from "./Todo";
export function List() {
  const [todoList, setTodoList] = useState([]);
  const empty = todoList.length === 0;
  return (
    <>
      <ListHeader />
      <div className={styles.container}>
        <div className={styles.todo}>
          {empty ? (
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
            <Todo />
          )}
        </div>
      </div>
    </>
  );
}
