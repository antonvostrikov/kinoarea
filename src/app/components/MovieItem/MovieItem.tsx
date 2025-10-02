import styles from './MovieItem.module.scss'
import Image, { StaticImageData } from 'next/image'

interface IMovieItem {
  image: StaticImageData
  title: string
  genre: string[]
  rating: string
}

const MovieItem = ({ image, title, genre, rating }: IMovieItem) => {

  return (
    <div className={styles.movieItem}>
      <div className={styles.movieItemImage}>
        <Image src={image} alt={title} width={340} height={462} />
        <div className={styles.movieItemHover}>
          <button>Карточка фильма</button>
         </div>
      </div> 
      <div className={styles.movieItemTitle}>
        <h5>{title}</h5>
        <span>{ genre.join(', ') }</span>
      </div>      
      <div className={styles.movieItemRating}>{rating}</div>
    </div>
  )
}

export default MovieItem