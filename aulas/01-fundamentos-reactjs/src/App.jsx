import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Faller"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius beatae molestias assumenda optio commodi in accusantium minus. Odit quia alias quo inventore beatae corporis dignissimos iste ipsum? Laboriosam, nam."
          />
          <Post author="Bruno Faller" content="Bola Redonda nao eh quadrada" />
        </main>
      </div>
    </div>
  );
}
