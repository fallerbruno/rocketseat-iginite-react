import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";
export function Form() {
  return (
    <>
      <form className={styles.todoForm}>
        <input placeholder="Adicione uma nova Tarefa" />
        <button type="submit">
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </form>
    </>
  );
}
