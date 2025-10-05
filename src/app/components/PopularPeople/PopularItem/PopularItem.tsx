import { StaticImageData } from 'next/image'
import styles from './PopularItem.module.scss'

interface IPopularItem {
  top: string
  nameRu: string
  nameEng: string
  age: string
  image?: StaticImageData
}

const PopularItem = ({ top, nameRu, nameEng, age, image }: IPopularItem) => {
  return (
    <div className={styles.popularItem}>
      <div className={styles.popularItemTop}>
        <span>{top}</span>
      </div>
      <div className={styles.popularItemBottom}>
        <h4>{nameRu}</h4>
        <h5>{nameEng}</h5>
        <span>{age}</span>
      </div>
    </div>
  )
}

export default PopularItem