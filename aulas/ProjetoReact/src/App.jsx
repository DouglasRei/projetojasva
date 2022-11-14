
import './global.css';
import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './app.module.css';
import { SidebBar } from './components/SideBar';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/21282250?v=4',
      name: 'Douglas Henrique',
      role: 'Analista :Desenvolvedor'
    },
    content: [
      { type: 'paragraph', content: 'Douglas Reis', },
      { type: 'paragraph', content: 'A procura de um emprego', },
      { type: 'link', content: 'https://www.linkedin.com/in/douglas-henrique-dos-reis-43b60b167/' },

    ],
    publishedAt: new Date('2022-10-31 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/21282250?v=4',
      name: 'Douglas Reis acrdita em Dragões',
      role: 'Analista :Desenvolvedor'
    },
    content: [
      { type: 'paragraph', content: 'Douglas Reis', },
      { type: 'paragraph', content: 'A procura de um emprego', },
      { type: 'link', content: 'https://www.linkedin.com/in/douglas-henrique-dos-reis-43b60b167/' },

    ],
    publishedAt: new Date('2022-10-30 15:00:00'),
  },

];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SidebBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}

              />)
          })}
        </main>

      </div>

    </div>
  )
}


