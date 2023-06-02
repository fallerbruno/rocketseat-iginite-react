import styles from "./ListHeader.module.css";

interface ListHeaderProps {
  todoList :{
    id: number;
    todo: string;
    checked: boolean;
  }
}

export function ListHeader(todoList: ListHeaderProps[]) {
  let done = 0;
  if (todoList.todoList.length > 0) {
    todoList.todoList.forEach((element) => {
      if (element.checked) {
        done++;
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.todo}>
          <div className={styles.todoStatus}>
            <p className={styles.make}>Tarefas Criadas: </p>
            <span>{todoList.todoList.length}</span>
          </div>
          <div className={styles.todoStatus}>
            <p className={styles.done}>Concluídas: </p>
            <span>
              {done} de {todoList.todoList.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
