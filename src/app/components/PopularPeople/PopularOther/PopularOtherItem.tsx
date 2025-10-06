import styles from './PopularOtherItem.module.scss'

interface IPopularOtherItem {
  id: number
  nameRu: string
  nameEng: string
  top: string
  age: string
}

const PopularOtherItem = ({ nameRu, nameEng, top, age }: IPopularOtherItem) => {
  return (
    <div className={styles.popularOtherItem}>
      <div className={styles.itemLeft}>
        <h4>{nameRu}</h4>
        <h5>{nameEng}</h5>
        <span>{age}</span>
      </div>
      <div className={styles.itemRight}>
        <span>{top}</span>
      </div>
    </div>
  )
}

export default PopularOtherItem