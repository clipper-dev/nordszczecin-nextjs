import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import OfertaCard from '../components/OfertaCard'
import { FaPhone } from 'react-icons/fa'
import { description, title } from '../data/main'
import Image from 'next/image'

export default function Oferta() {




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
        <div id="home" className={[styles["hero-section"]].join(" ")}>
          <div className={styles["hero-section-image"]}>
            <Image src="/res/kitchen3.jpg" layout="fill" objectFit="cover" />
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


        {/*Head of the page with main text and call to action*/}

        <div id='oferta' className={styles['section']}>
          <div className={styles['oferta']}>
            <OfertaCard label='KUCHNIA' src='kuchnia-nowoczesna' side='left'>
                <div className={styles['oferta-title']}>Kuchnie nowoczesne na wymiar</div>
                <div className={styles['oferta-content']}>Przedstawiamy wysokiej jakości kuchnie na wymiar w NORD Szczecin.</div>
                <div className={styles['oferta-content']}>Specjalizujemy się w projektowaniu i tworzeniu mebli kuchennych od lat, a w szczególności do kucnii nowoczesnych i modernistycznych.</div>
                <div className={styles['oferta-content']}>W zależności od potrzeb i wymagań klienta oferujemy montaż oraz zabudowę sprzętu RTV oraz AGD frontami szafek czy drzwiczkami.</div>
                <div className={styles['oferta-content']}>Kuchnia na wymiar zapewnia doskonałą opcję przy wyborze szafek i urządzeń AGD. Innowacyjne projekty kuchni zwiększają ergonomię, poprawiają komfort i zapewniają przyjemną atmosferę.</div>
            </OfertaCard>

            <OfertaCard label='GARDEROBA' src='szafy-garderoby' side='right'>
            <div className={styles['oferta-title']}>Szafy przesuwne i garderoby</div>
                <div className={styles['oferta-content']}>W ramach usług oferowanych przez naszą firmę możemy wykonać zabudowę garderoby, w tym dowolną szafę wnękową i przesuwną w dowolnym kolorze i wzornictwie.</div>
                <div className={styles['oferta-content']}>Wieloletnie doświadczenie w projektowaniu i produkcji mebli oraz nieustanne monitorowanie trendów wnętrzarskich pozwoliło nam zapewnić naszym klientom stałą obsługę na najwyższym poziomie.</div>
              
            </OfertaCard>

            <OfertaCard label='BIURO' src='zabudowy'  side='left'>
            <div className={styles['oferta-title']}>Meble biurowe</div>
                <div className={styles['oferta-content']}>Nasza oferta obejmuje projektowanie, produkcję i montaż mebli biurowych w województwie Zachodniopomorskim.</div>
                <div className={styles['oferta-content']}>Pomożemy Państwu w znalezieniu odpowiedniego rozwiązania dla Państwa specyfikacji przy aranżacji przestrzeni dla sekretariatu, gdzie potrzebne są pojemne szafy, a także dla gabinetu dyrektora czy pokoi pracowniczych, gdzie przywiązuje się najwyższą wagę do funkcjonalności i minimalizmu.</div>
                
            </OfertaCard>

          </div>

        </div>

      </div>



      {/*Footer*/}

      <Footer />


    </>
  )
}
