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
              <Link href="/tasks">Tasks</Link>
            </li>
            <li className={navStyles.item}>
              <Link href="/character">Character</Link>
            </li>
            <li className={navStyles.item}>
              <Link href="/dev">Dev</Link>
            </li>
            <li className={navStyles.item}>
              <Link href="/account">Account</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav