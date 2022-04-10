import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bulma/css/bulma.min.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="A Rush Hour Collab Special" />
        <p className="description">
          Please Type in Your Name
        </p>
      </main>
      <Footer />
    </div>
  )
}
