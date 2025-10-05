import styles from './ReceiptsHeader.module.scss'

const ReceiptsHeader = () => {
  return (
    <div className={styles.receiptsHeader}>
      <div className={styles.receiptsLeft}>
        <div className={styles.receiptsTitle}>
          <h2>Кассовые сборы</h2>
        </div>
        <div className={styles.receiptsDate}>
          <p>13 марта - 15 марта</p>
        </div>
      </div>
      <div className={styles.receiptsRight}>
        <div className={styles.receiptsLocation}>
          <ul>
            <li className={styles.active}>Россия</li>
            <li>Весь мир</li>
            <li>США и Канада</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReceiptsHeader