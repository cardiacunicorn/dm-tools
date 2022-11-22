import styles from '../styles/Header.module.scss'

const Header = ({ title, description }) => {
  return (
    <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <p className="sans">{description}</p>
    </header>
  )
}

export default Header