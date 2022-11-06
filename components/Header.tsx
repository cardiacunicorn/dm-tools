import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>Short description</p>
    </header>
  )
}

export default Header