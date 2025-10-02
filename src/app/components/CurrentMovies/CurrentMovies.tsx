import Container from '../Container/Container'
import MovieItem from '../MovieItem/MovieItem'
import styles from './CurrentMovies.module.scss'
import CurrentMoviesHeader from './CurrentMoviesHeader/CurrentMoviesHeader'
import EscapeImg from '../../../../public/images/escape.jpg'
import JokerImg from '../../../../public/images/joker.jpg'
import StarWarsImg from '../../../../public/images/starwars.jpg'
import Gentlemen from '../../../../public/images/gentlemen.jpg'

const movies = [
  {  
    id: 1,
    title: 'Побег из Претории',
    image: EscapeImg,
    genre: ['Трейлер'],
    rating: '6.70'
  },
  {  
    id: 2,
    title: 'Джокер',
    image: JokerImg,
    genre: ['Трейлер', 'Драма', 'Криминал'],
    rating: '8.50'
  },
  {  
    id: 3,
    title: 'Звездные войны: Скайуокер. Восход ',
    image: StarWarsImg,
    genre: ['Фантастика', 'фэентези', 'боевик', 'приключения'],
    rating: '6.70'
  },
  {  
    id: 4,
    title: 'Джентельмены',
    image: Gentlemen,
    genre: ['Боевик', 'коммедия', 'криминал'],
    rating: '8.00'
  }
]

const CurrentMovies = () => {
  return (
    <section className={styles.sectionCurrentMovies}>
      <Container>
        <CurrentMoviesHeader />
        <div className={styles.moviesWrapper}>
          { movies.map((movie) => <MovieItem key={movie.id} {...movie} /> ) }
        </div> 
        <div className={styles.moviesAll}>
          <button>Все новинки</button>
        </div>
      </Container>
    </section>
  )
}

export default CurrentMovies