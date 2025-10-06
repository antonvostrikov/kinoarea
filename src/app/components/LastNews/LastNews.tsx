import Container from '../Container/Container'
import styles from './LastNews.module.scss'
import LastNewsHeader from './LastNewsHeader/LastNewsHeader'
import LastNews1 from '../../../../public/images/lastNews/lastNews1.jpg'
import LastNews2 from '../../../../public/images/lastNews/lastNews2.jpg'
import LastNews3 from '../../../../public/images/lastNews/lastNews3.jpg'
import LastNews4 from '../../../../public/images/lastNews/lastNews4.jpg'
import LastNews5 from '../../../../public/images/lastNews/lastNews5.jpg'
import Image from 'next/image'
import { Eye, MessageCircle } from 'lucide-react'

const LastNews = () => {
  return (
    <section className={styles.lastNewsSection}>
      <Container>
        <LastNewsHeader />
        <div className={styles.lastNewsWrapper}>
          <div className={`${styles.newsXL} ${styles.newsBlock}`} id={styles.blockA}>
            <Image src={LastNews1} alt="Последние новости" />
            <div className={styles.newsDescription}>
              <div className={styles.newsDescriptionTop}>
                <div className={styles.newsDate}>
                  <span>15 Апр 2020</span>
                </div>
                <div className={styles.newsViews}>
                  <Eye /> 242
                </div>
                <div className={styles.newsComment}>
                  <MessageCircle /> 14
                </div>
              </div>
              <div className={styles.newsDescriptionBottom}>
                <h2>Не время умирать. Перенос релиза фильма</h2>
                <p>Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</p>
              </div>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.innerWrapper}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockB}>
            <Image src={LastNews2} alt="Последние новости" />
            <div className={styles.newsDescription}>
              <div className={styles.newsDescriptionTop}>
                <span>15 Апр 2020</span>
              </div>
              <div className={styles.newsDescriptionBottom}>
                <p>Как изменили Соника с последнего анонса</p>
              </div>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.innerWrapper}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockC}>
            <Image src={LastNews3} alt="Последние новости" />
            <div className={styles.newsDescription}>
              <div className={styles.newsDescriptionTop}>
                <span>15 Апр 2020</span>
              </div>
              <div className={styles.newsDescriptionBottom}>
                <p>Не время умирать. Перенос релиза фильма</p>
              </div>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.innerWrapper}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockD}>
            <Image src={LastNews4} alt="Последние новости" />
            <div className={styles.newsDescription}>
              <div className={styles.newsDescriptionTop}>
                <span>15 Апр 2020</span>
              </div>
              <div className={styles.newsDescriptionBottom}>
                <p>От этой новости вы будете шокированы до завтра</p>
              </div>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.innerWrapper}>
              <button>Читать новость</button>
            </div>
          </div>
          <div className={`${styles.newsXS} ${styles.newsBlock}`} id={styles.blockE}>
            <Image src={LastNews5} alt="Последние новости" />
            <div className={styles.newsDescription}>
              <div className={styles.newsDescriptionTop}>
                <span>12 Апр 2020</span>
              </div>
              <div className={styles.newsDescriptionBottom}>
                <p>Вот это, конечно, да!</p>
              </div>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.innerWrapper}>
              <button>Читать новость</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LastNews