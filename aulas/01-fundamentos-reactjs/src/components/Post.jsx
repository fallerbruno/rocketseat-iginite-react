import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    "Post muito bacana!",
    "Parabéns pelo projeto!",
    "Muito bom! Parabéns!",
  ]);

  const [newCommentText, setnewCommentText] = useState("");

  function handleCreatenewCommentText() {
    event.preventDefault();
    //imutabilidade
    //spreed le o valor e copia.
    setComments([...comments, newCommentText]);
    setnewCommentText("");
  }

  function handlenewCommentTextChange() {
    event.target.setCustomValidity("");
    setnewCommentText(event.target.value);
  }

  function handlenewCommentTextInvalid() {
    event.target.setCustomValidity("O comentário não pode ser vazio!");
  }

  function deleteComment(commentToDelete) {
    //imutabilidade as variaveis nao sofrem mutação
    //criamos um novo espaço na memoria
    const commentWhithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentWhithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={format(publishedAt, "dd MMM yyyy 'ás' HH:mm'h", {
            locale: ptBR,
            addSuffix: true,
          })}
          dateTime={publishedAt.toISOString()}
        >
          {formatDistanceToNow(publishedAt, { locale: ptBR })}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          switch (item.type) {
            case "paragraph":
              return <p key={index}>{item.content}</p>;
            case "link":
              return (
                <a key={index} href="#">
                  {item.content}
                </a>
              );
            default:
              return null;
          }
        })}
      </div>

      <form
        onSubmit={handleCreatenewCommentText}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handlenewCommentTextChange}
          placeholder="O que você achou do projeto?"
          value={newCommentText}
          onInvalid={handlenewCommentTextInvalid}
          required
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
