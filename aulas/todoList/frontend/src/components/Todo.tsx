import styles from "./Todo.module.css";
import { Trash } from "phosphor-react";
export function Todo() {
  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <label>
          <input type="checkbox" onChange={() => {}} />
        </label>
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      </div>
      <Trash size={20} />
    </div>
  );
}
