import Image from 'next/image'
import Logotype from '../../assets/logotype.svg'
import styles from './Header.module.scss'
import Link from 'next/link'
import Container from '../Container/Container'

const Header = () => {
  return (
    <header>
      <Container classname={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Image src={Logotype} alt="Logotype" />
          <span>Kinoarea</span>
        </div>
        <div className={styles.headerMenu}>
          <nav>
            <ul>
              <li>
                <Link href="#">Афиша</Link>
              </li>
              <li>
                <Link href="#">Медиа</Link>
              </li>
              <li>
                <Link href="#">Фильмы</Link>
              </li>
              <li>
                <Link href="#">Актеры</Link>
              </li>
              <li>
                <Link href="#">Новости</Link>
              </li>
              <li>
                <Link href="#">Подборки</Link>
              </li>
              <li>
                <Link href="#">Категории</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.searchBtn}></button>
          <button className={styles.authBtn}>Вход</button>
        </div>
      </Container>
    </header>
  )
}

export default Header