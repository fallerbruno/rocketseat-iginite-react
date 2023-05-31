import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


interface Author {
  id: number;
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    "Post muito bacana!",
    "Parabéns pelo projeto!",
    "Muito bom! Parabéns!",
  ]);

  const [newCommentText, setnewCommentText] = useState("");

  function handleCreateNewCommentText(event: FormEvent) {
    event.preventDefault();
    //imutabilidade
    //spreed le o valor e copia.
    setComments([...comments, newCommentText]);
    setnewCommentText("");
  }
  //declara q foi feito no HTMLTextAreaElement 
  function handlenewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setnewCommentText(event.target.value);
  }

  function handlenewCommentTextInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("O comentário não pode ser vazio!");
  }

  function deleteComment(commentToDelete: string) {
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
          <Avatar hasBorder={true} src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={format(post.publishedAt, "dd MMM yyyy 'ás' HH:mm'h", {
            locale: ptBR,
          })}
          dateTime={post.publishedAt.toISOString()}
        >
          {formatDistanceToNow(post.publishedAt, { locale: ptBR })}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item, index) => {
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
        onSubmit={handleCreateNewCommentText}
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
