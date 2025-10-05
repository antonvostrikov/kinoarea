import Container from '../Container/Container'
import styles from './Receipts.module.scss'
import ReceiptsHeader from './ReceiptsHeader/ReceiptsHeader'
import BloodshotImg from '../../../../public/images/bloodshot.jpg'
import OnwardImg from '../../../../public/images/onward.jpg'
import InvisibleManImg from '../../../../public/images/invisibleman.jpg'
import SonicImg from '../../../../public/images/sonic.jpg'
import GentlemenImg from '../../../../public/images/gentlemenSmall.jpg'
import ReceiptsItem from './ReceiptsItem/ReceiptsItem'

const receipts = [
  {
    id: 1,
    title: 'Бладшот',
    boxOffice: '13 млн',
    total: '15.1 млн за 4 недели',
    image: BloodshotImg
  },
  {
    id: 2,
    title: 'Вперед',
    boxOffice: '6.8 млн',
    total: '41.4 млн за 4 недели',
    image: OnwardImg
  },
  {
    id: 3,
    title: 'Человек-неведимка',
    boxOffice: '6.2 млн',
    total: '58.3 млн за 3 недели',
    image: InvisibleManImg
  },
  {
    id: 4,
    title: 'Соник в кино',
    boxOffice: '2.9 млн',
    total: '15.1 млн за 4 недели',
    image: SonicImg
  },
  {
    id: 5,
    title: 'Джентельмены',
    boxOffice: '13 млн',
    total: '78.7 млн за 11 недели',
    image: GentlemenImg
  },
]

const Receipts = () => {
  return (
    <section className={styles.receiptsSection}>
      <Container>
        <ReceiptsHeader />
        <div className={styles.receiptsWrapper}>
          { receipts.map((item) => <ReceiptsItem key={item.id} {...item} />) }
        </div>
      </Container>
    </section>
  )
}

export default Receipts