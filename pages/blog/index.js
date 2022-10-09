import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import OfertaCard from '../../components/OfertaCard'
import { FaPhone } from 'react-icons/fa'

import { blogData } from '../../data/blog'
import BlogCard from '../../components/BlogCard'
import { description, title } from '../../data/main'

export default function Blog() {




  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="UTF-8"></meta>
        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content="/res/1.jpg" href="/res/1.jpg" />
        <meta name="robots" content="index, follow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header wiht navbar*/}

      <Navbar />

      {/*Main content*/}
      <div className={[styles['main-container'], ['content-container']].join(' ')}>

        {/*Title image*/}
        {/*Hero section*/}
        <div id='home' className={[styles['hero-section'],styles['img1']].join(" ")}>
          <div className={styles['hero-section-text']} >Blog</div>
          <div id='animated-text' className={styles['hero-section-text-animated']}>
            <span>NORD SZCZECIN</span>
          </div>
        </div>
		{/* blog articles section */}

        <div id='blog' className={styles['section']}>
          {blogData.map((post, index) => {
			return <BlogCard post={post} key={index}/>
		  })}


        </div>
      </div>



      {/*Footer*/}

      <Footer />


    </>
  )
}
