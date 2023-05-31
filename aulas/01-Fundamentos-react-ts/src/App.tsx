import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

// author {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts: PostType[] = [
  {
    author: {
      id: 1,
      avatarUrl: "https://github.com/fallerbruno.png",
      name: "Bruno Faller",
      role: "Web Developer",
    },
    publishedAt: new Date("2023-05-30 23:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "novoprojeto" },
      { type: "link", content: "nlw" },
    ],
  },
  {
    author: {
      id: 2,
      avatarUrl: "https://github.com/yurikerber.png",
      name: "Yuri Kerber",
      role: "Estagiario",
    },
    publishedAt: new Date("2023-05-31 08:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de aprender Html e CSS" },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "yurikerber.com.br" },
      { type: "link", content: "novoprojeto" },
      { type: "link", content: "nlw" },
    ],
  },
];
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
