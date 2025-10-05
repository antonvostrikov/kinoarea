import styles from './PopularPeopleHeader.module.scss'

const PopularPeopleHeader = () => {
  return (
    <div className={styles.popularPeopleHeader}>
      <div className={styles.popularTitle}>
        <h2>Популярные персоны</h2>
      </div>
      <div className={styles.popularListDate}>
        <ul>
          <li>За год</li>
          <li>За месяц</li>
          <li className={styles.active}>За неделю</li>
        </ul>
      </div>
    </div>
  )
}

export default PopularPeopleHeader