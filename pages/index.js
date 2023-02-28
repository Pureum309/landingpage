import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/navbar'
import Banner from '@/components/banner'
import Skills from '@/components/skills'
import Project from '@/components/project'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <NavBar />
       <Banner />
       <Skills />
       <Project />
       <Footer />
      </main>
    </>
  )
}
