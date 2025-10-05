import styles from './PopularOther.module.scss'

interface IPopularOtherItem {
  id: string
  nameRu: string
  nameEng: string
  top: string
  age: string
}

const PopularOtherItem = ({ nameRu, nameEng, top, age }: IPopularOtherItem) => {
  return (
    <div className={styles.popularOtherItem}>
      
    </div>
  )
}

export default PopularOtherItem