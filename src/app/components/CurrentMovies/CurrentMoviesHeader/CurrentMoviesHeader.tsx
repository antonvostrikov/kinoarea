import styles from './CurrentMoviesHeader.module.scss'

const CurrentMoviesHeader = () => {
  return (
    <div className={styles.headerMovies}>
      <div className={styles.headerMoviesTitle}>
        <h2>Сейчас в кино</h2>
      </div>
      <div className={styles.headerMoviesList}>
        <ul>
          <li className={styles.active}>Все</li>
          <li>Боевики</li>
          <li>Приключения</li>
          <li>Комедии</li>
          <li>Фантастика</li>
          <li>Триллеры</li>
          <li>Драма</li>
        </ul>
      </div>
    </div>
  )
}

export default CurrentMoviesHeader