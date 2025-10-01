import Container from '../Container/Container'
import MovieItem from '../MovieItem/MovieItem'
import styles from './CurrentMovies.module.scss'
import CurrentMoviesHeader from './CurrentMoviesHeader/CurrentMoviesHeader'

const movies = [
  {  
    id: 1,
    title: 'Побег из Претории',
    image: '',
    genre: ['Трейлер', 'Драма', 'Криминал'],
    rating: '6.70'
  }
]

const CurrentMovies = () => {
  return (
    <section className={styles.sectionCurrentMovies}>
      <Container>
        <CurrentMoviesHeader />
        <div className={styles.moviesWrapper}>
          { movies.map((movie) => <MovieItem {...movie} /> ) }
        </div> 
      </Container>
    </section>
  )
}

export default CurrentMovies