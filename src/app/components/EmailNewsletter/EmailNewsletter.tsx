import Container from '../Container/Container'
import styles from './EmailNewsletter.module.scss'
import Logotype from '../../../../public/images/logotype.svg'
import Image from 'next/image'

const EmailNewsletter = () => {
  return (
    <section className={styles.email}>
      <Container>
        <div className={styles.emailWrapper}>
          <div className={styles.emailOverlay}>
            <div className={styles.emailLogo}>
              <Image src={Logotype} alt="Kinoarea"/>
              <h4>Kinoarea</h4>
            </div>
            <div className={styles.emailNewsletter}>
              <h2>Подпишитесь на E-mail рассылку</h2>
              <p>Если хотите быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!</p>
            </div>
            <div className={styles.emailForm}>
              <form>
                <input type="text" placeholder="Введите свой E-mail адрес" />
                <button>Подписаться</button>
              </form>
              <div className={styles.emailFormPolicy}>
                <input type="checkbox" id="checkboxPolicy" />
                <p>Соглашаюсь на условия <span>политики конфиденциальности</span></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EmailNewsletter