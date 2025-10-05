import Image, { StaticImageData }  from 'next/image'
import styles from './ReceiptsItem.module.scss'

interface IReceiptsItem {
  title: string
  boxOffice: string
  total: string
  image: StaticImageData
}

const ReceiptsItem = ({ title, boxOffice, total, image }: IReceiptsItem) => {
  return (
    <div className={styles.receiptsItem}>
      <div className={styles.receiptsImage}>
        <Image src={image} alt={title} />
      </div>
      <div className={styles.receiptsDescription}>
        <h4>{title}</h4>
        <span className={styles.boxOffice}>{boxOffice}</span>
        <span className={styles.boxOfficeTotal}>{total}</span>
      </div>
    </div>
  )
}

export default ReceiptsItem