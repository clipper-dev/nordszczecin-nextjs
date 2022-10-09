import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import OfertaCard from "../components/OfertaCard";
import { FaPhone } from "react-icons/fa";
import { title, description } from "../data/main";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="UTF-8"></meta>
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="/res/1.jpg" href="/res/1.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header wiht navbar*/}

      <Navbar />

      {/*Main content*/}
      <div
        className={[styles["main-container"], ["content-container"]].join(" ")}
      >
        {/*Title image*/}
        {/*Hero section*/}
        <div id="home" className={[styles["hero-section"]].join(" ")}>
          <div className={styles["hero-section-image"]}>          
            <Image src="/res/1.jpg" layout="fill" objectFit="cover"/>
          </div>
          <div className={styles["hero-section-text"]}>
            <div className={styles["hero-section-title"]}>
              Kuchnie na wymiar
            </div>
            <div
              id="animated-text"
              className={styles["hero-section-text-animated"]}
            >
              <span>Nowoczesne i stylistyczne rozwiązania dla Ciebie</span>
            </div>
          </div>
        </div>

        {/*Head of the page with main text and call to action*/}
      </div>

      {/*Footer*/}

      <Footer />
    </>
  );
}
