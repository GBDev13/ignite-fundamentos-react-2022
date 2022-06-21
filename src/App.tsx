import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

import styles from './app.module.css';

import './global.css';

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/71772559?v=4',
      name: 'Gabriel Borges',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-02 19:00:35')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 💕' },
      { type: 'paragraph', content: 'Finalizei mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignews ✨' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-01 10:00:35')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
