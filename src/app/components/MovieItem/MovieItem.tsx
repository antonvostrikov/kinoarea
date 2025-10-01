import styles from './MovieItem.module.scss'
import Image from 'next/image'

type Genre = {
  genre: string
}

interface IMovieItem {
  image: string
  title: string
  genre: Genre[]
  rating: string
}

const MovieItem = ({ image, title, genre, rating }: IMovieItem) => {
  console.log(genre)

  return (
    <div className={styles.movieItem}>
      <div className={styles.movieItemImage}>
        <Image src={image} alt={title} />
      </div>
      <div className={styles.movieItemTitle}>
        <h5>{title}</h5>
        <ul>
          { genre.map((g, idx) => <li key={idx}>{g.genre}</li>) }
        </ul>
      </div>      
      <div className={styles.movieItemRating}></div>
    </div>
  )
}

export default MovieItem