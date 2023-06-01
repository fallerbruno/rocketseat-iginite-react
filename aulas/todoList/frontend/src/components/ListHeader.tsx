import styles from "./ListHeader.module.css";
export function ListHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.todo}>
          <div className={styles.todoStatus}>
            <p className={styles.make}>Tarefas Criadas: </p>
            <span>0</span>
          </div>
          <div className={styles.todoStatus}>
            <p className={styles.done}>Concluídas: </p>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
