import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/fallerbruno.png" />
          <div className={styles.authorInfo}>
            <strong>Bruno Faller</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="30 de Maio de 2023 ás 23:00:00"
          dateTime="2023-05-30 23:00:00"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#novoprojeto</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="O que você achou do projeto?" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
