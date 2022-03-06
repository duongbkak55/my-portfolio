import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Project from '../components/Project'
import projects from '../utils/projects'

export default function Home() {
  return (
    <div className='box-border border-2 max-w-[100vw] min-h-[100vh] container'>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Profile />
      <div className='pt-10'>
        {
          projects.map((item, index) => {
            return <Project item={item} key={index} />
          })
        }
      </div>
    </div>
  )
}
