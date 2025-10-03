import { faFacebookF, faInstagram, faTwitter, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Container from '../Container/Container'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footerBottom}>
      <Container>
        <div className={styles.footerSocial}>
          <ul>
            <li><FontAwesomeIcon icon={faVk} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faFacebookF} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faYoutube} /></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link href="#">Афиша</Link>
            </li>
            <li>
              <Link href="#">Новости</Link>
            </li>
            <li>
              <Link href="#">Персоны</Link>
            </li>
            <li>
              <Link href="#">Рейтинги</Link>
            </li>
            <li>
              <Link href="#">Рецензии</Link>
            </li>
            <li>
              <Link href="#">Каталог фильмов</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerCopyright}>
          <p>2020 © Kinoarea. Все права защищены</p>
          <Link href="#">Политика конфиденциальности</Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer