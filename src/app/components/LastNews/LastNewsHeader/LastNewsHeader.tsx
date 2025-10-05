import Link from 'next/link'
import styles from './LastNewsHeader.module.scss'
import { MoveRight } from 'lucide-react'

const LastNewsHeader = () => {
  return (
    <div className={styles.lastNewsHeader}>
      <h2>Последние новости</h2>
      <Link href="#">Все новости <MoveRight /></Link>
    </div>
  )
}

export default LastNewsHeader