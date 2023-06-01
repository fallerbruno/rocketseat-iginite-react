import styles from "./Header.module.css";

import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Ignite" />
      </header>
    </div>
  );
}
