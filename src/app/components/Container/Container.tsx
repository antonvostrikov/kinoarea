import styles from './Container.module.scss'

interface IContainer {
  children: React.ReactNode
  classname?: string
}

const Container = ({ children, classname }: IContainer) => {
  return (
    <div className={`${styles.container} ${classname}`}>
      {children}
    </div>
  )
}

export default Container