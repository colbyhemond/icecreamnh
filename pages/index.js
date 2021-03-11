import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Polls from '../components/Polls'

const data = undefined

export default function Home() {

  const data = [{title: "Mac's Maple", count: 2}, {title: "Dairy Twirl", count: 2}, {title: "Twirl", count: 2}, {title: "Dairy", count: 2}, {title: "Dairl", count: 2}, {title: "Darl", count: 2}]

  return (
    <div className={styles.container}>
      <Head>
        <title>Ice Cream NH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Ice Cream - New Hampshire
      </h1>

      <main className={styles.main}>
        <Polls data={data}/>
      </main>

      <footer className={styles.footer}>
          Powered by 🍦
      </footer>
    </div>
  )
}
