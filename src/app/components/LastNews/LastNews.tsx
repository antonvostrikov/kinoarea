import Container from '../Container/Container'
import styles from './LastNews.module.scss'
import LastNewsHeader from './LastNewsHeader/LastNewsHeader'
import LastNews1 from '../../../../public/images/lastNews/lastNews1.jpg'
import LastNews2 from '../../../../public/images/lastNews/lastNews2.jpg'
import LastNews3 from '../../../../public/images/lastNews/lastNews3.jpg'
import LastNews4 from '../../../../public/images/lastNews/lastNews4.jpg'
import LastNews5 from '../../../../public/images/lastNews/lastNews5.jpg'
import Image from 'next/image'

const LastNews = () => {
  return (
    <section className={styles.lastNewsSection}>
      <Container>
        <LastNewsHeader />
        <div className={styles.lastNewsWrapper}>
          <div className={`${styles.newsXL} ${styles.newsBlock}`} id={styles.blockA}>
            <Image src={LastNews1} alt="Последние новости" />
            <div className={styles.newsDescription}>
              1
            </div>
            <div className={styles.overlay}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockB}>
            <Image src={LastNews2} alt="Последние новости" />
            <div className={styles.newsDescription}>
              2
            </div>
            <div className={styles.overlay}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockC}>
            <Image src={LastNews3} alt="Последние новости" />
            <div className={styles.newsDescription}>
              3
            </div>
            <div className={styles.overlay}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockD}>
            <Image src={LastNews4} alt="Последние новости" />
            <div className={styles.newsDescription}>
              4
            </div>
            <div className={styles.overlay}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockE}>
            <Image src={LastNews5} alt="Последние новости" />
            <div className={styles.newsDescription}>
              5
            </div>
            <div className={styles.overlay}>
              <button>Читать новость</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LastNews