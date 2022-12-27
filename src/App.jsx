import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu8-drBtzMIOeGqKSB9eI1lGIKpxRnTRLX0wHMS4jQ=s88-w88-h88-c-k',
      name: 'Euller Cruz',
      role: 'Analista de suporte',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de finalizar mais um chamado. Agora o setor de TI vai para frente! 🚀'},
      { tpe: 'link', content: '👉https://helpdesk.kofre.com.br/' },
    ],
    publishedAt: new Date("2022-12-02 13:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://lh3.googleusercontent.com/a-/ACNPEu99KM2TEh6QcdQ7Z-QEPsfERhrK3ALjV0L0WAGlLg=s88-w88-h88-c-k',
      name: 'Natáli Palma',
      role: 'Analista de sistemas',
    },
    content: [
      {type: 'paragraph', content:'Gente 👋'},
      {type: 'paragraph', content:'Os chamados do pessoal da controladoria vão me deixar louca! 🚀'},
      { tpe: 'link', content: '👉https://helpdesk.kofre.com.br/' },
    ],
    publishedAt: new Date("2022-12-02 13:00:00"),
  },
  
]



function App() {
  return (
    <div>
    <Header />
    
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => { 
            return (
              <Post ///Puxando do 'posts' que seria uma API
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
