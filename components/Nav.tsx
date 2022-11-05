import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul className={navStyles.list}>
            <li className={navStyles.item}>
                <Link href="/">Home</Link>
            </li>
            <li className={navStyles.item}>
              <Link href="/about">About</Link>
            </li>
            <li className={navStyles.item}>
              <Link href="/todo">To Do</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav