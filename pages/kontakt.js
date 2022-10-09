import Head from "next/head";
import styles from "../styles/Kontakt.module.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { useWindowSize } from "../utils/CustomHooks";
import { description, title } from "../data/main";
import Image from "next/image";

export default function Kontakt() {
  {
    /*Custom hook responsible for detecting small screen like mobiles*/
  }
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="UTF-8"></meta>
        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content="/res/1.jpg" href="/res/1.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header wiht navbar*/}

      <Navbar />

      {/*Main content*/}
      <div
        className={[styles["main-container"], ["content-container"]].join(" ")}
      >
        {/*Hero section*/}
        <div id="home" className={[styles["hero-section"]].join(" ")}>
          <div className={styles["hero-section-image"]}>
            <Image src="/res/kitchen2.jpg" layout="fill" objectFit="cover" />
          </div>
          <div className={styles["hero-section-text"]}>
            <div className={styles["hero-section-title"]}>
              Skontaktuj się z nami
            </div>
            <div
              id="animated-text"
              className={styles["hero-section-text-animated"]}
            >
              <span>NORD Szczecin</span>
            </div>
          </div>
        </div>
        <div id="home" className={styles.kontaktSection}>
          <div className={styles["kontakt-content"]}>
            Nasza oferta obejmuje projektowanie, produkcję i montaż mebli,
            takich jak meble kuchenne, szafy, garderoby oraz meble biurowe w
            województwie <span className={styles.accent}>Zachodniopomorskim</span>.
          </div>
          <div className={styles["kontakt-content"]}>
            Zapraszamy do umówienia się na bezpłatną wycenę i projekt.
          </div>
          <div className={styles["kontakt-content"]}>888 333 891</div>
          <div className={styles["kontakt-content"]}>biuro@nordszczecin.pl</div>
        </div>
      </div>

      {/*Footer*/}

      <Footer />
    </>
  );
}
