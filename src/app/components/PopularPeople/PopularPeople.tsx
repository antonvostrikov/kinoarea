import Container from '../Container/Container'
import styles from './PopularPeople.module.scss'
import PopularPeopleHeader from './PopularPeopleHeader/PopularPeopleHeader'
import TarantinoImage from '../../../../public/images/popularPeople/tarantino.jpg'
import StathamImage from '../../../../public/images/popularPeople/statham.jpg'
import PopularItem from './PopularItem/PopularItem'
import PopularOtherItem from './PopularOther/PopularOtherItem'

const people = [
  { 
    id: 1,
    image: TarantinoImage,
    top: '1-е место',
    nameRu: 'Квентин Тарантино',
    nameEng: 'Quentin Tarantino',
    age: '57 лет'
  },
  { 
    id: 2,
    image: StathamImage,
    top: '2-е место',
    nameRu: 'Джейсон Стейтем',
    nameEng: 'Jason Statham',
    age: '52 года'
  },
  { 
    id: 3,
    top: '3-е место',
    nameRu: 'Тинто Брасс',
    nameEng: 'Tinto Brass',
    age: '87 лет'
  } ,
  { 
    id: 4,
    top: '4-е место',
    nameRu: 'Джеки Чан',
    nameEng: 'Jackie Chan',
    age: '66 лет'
  },
  { 
    id: 5,
    top: '5-е место',
    nameRu: 'Том Харди',
    nameEng: 'Tom Hardy',
    age: '42 года'
  },
  { 
    id: 6,
    top: '6-е место',
    nameRu: 'Акшай Кумар',
    nameEng: 'Akshay Kumar',
    age: '52 года'
  }  
]

const PopularPeople = () => {
  return (
    <section className={styles.popularPeopleSection}>
      <Container>
        <PopularPeopleHeader />
        <div className={styles.popularPeopleWrapper}>
          { people.slice(0, 2).map(item => <PopularItem key={item.id} {...item} />) }
          <div className={styles.popularPeopleOther}>
            { people.slice(2, 6).map(item => <PopularOtherItem key={item.id} {...item} /> ) }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PopularPeople